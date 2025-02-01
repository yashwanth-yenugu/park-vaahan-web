import { Button } from "@/components/ui/button";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";
import JSZip from "jszip";
import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_FORMATS = [
  { label: "3GPP", value: "3gp", mimeType: "video/3gpp" },
  { label: "AVI", value: "avi", mimeType: "video/x-msvideo" },
  { label: "FLV", value: "flv", mimeType: "video/x-flv" },
  { label: "MOV", value: "mov", mimeType: "video/quicktime" },
  { label: "MPEG4", value: "m4v", mimeType: "video/x-m4v" },
];

export default function TextToImagePage() {
  const [text, setText] = useState("");
  const [decodedText, setDecodedText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [ffmpeg] = useState(() => new FFmpeg());
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState(VIDEO_FORMATS[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const multipleFilesInputRef = useRef<HTMLInputElement>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const [imageToEncode, setImageToEncode] = useState<File | null>(null);
  const imageToEncodeRef = useRef<HTMLInputElement>(null);
  const [decodedImage, setDecodedImage] = useState<string | null>(null);
  const decodedImageRef = useRef<HTMLImageElement>(null);
  const decodeImageInputRef = useRef<HTMLInputElement>(null);
  const [binaryText, setBinaryText] = useState<string>("");
  const imageToBinaryRef = useRef<HTMLInputElement>(null);
  const [binaryToImageResult, setBinaryToImageResult] = useState<string | null>(
    null
  );
  const binaryTextInputRef = useRef<HTMLTextAreaElement>(null);

  // Load FFmpeg
  useEffect(() => {
    const load = async () => {
      try {
        const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm";
        await ffmpeg.load({
          coreURL: `${baseURL}/ffmpeg-core.js`,
          wasmURL: `${baseURL}/ffmpeg-core.wasm`,
          workerURL: `${baseURL}/ffmpeg-core.worker.js`,
        });
        console.log("FFmpeg loaded successfully");
        setIsLoaded(true);
        setLoadingError("");
      } catch (error) {
        console.error("Error loading FFmpeg:", error);
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        setLoadingError(
          `Failed to load video conversion tools: ${errorMessage}. Make sure you're using a modern browser with SharedArrayBuffer support.`
        );
      }
    };
    load();
  }, [ffmpeg]);

  const generateImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !text) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear previous content
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Convert text to binary
    const binaryString = text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join("");

    // Calculate dimensions
    const size = Math.ceil(Math.sqrt(binaryString.length));
    canvas.width = size;
    canvas.height = size;

    // Create ImageData
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    // Fill image data
    for (let i = 0; i < binaryString.length; i++) {
      const value = binaryString[i] === "1" ? 255 : 0;
      const index = i * 4;
      data[index] = value; // R
      data[index + 1] = value; // G
      data[index + 2] = value; // B
      data[index + 3] = 255; // A
    }

    // Put image data on canvas
    ctx.putImageData(imageData, 0, 0);
  }, [text]);

  const downloadImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "encoded-text.png";
    link.href = canvas.toDataURL();
    link.click();
  }, []);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image to canvas
        ctx.drawImage(img, 0, 0);

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Convert pixels to binary string
        let binaryString = "";
        for (let i = 0; i < data.length; i += 4) {
          binaryString += data[i] > 127 ? "1" : "0";
        }

        // Convert binary to text
        let decoded = "";
        for (let i = 0; i < binaryString.length; i += 8) {
          const byte = binaryString.substr(i, 8);
          if (byte.length === 8) {
            decoded += String.fromCharCode(parseInt(byte, 2));
          }
        }

        setDecodedText(decoded);
      };

      img.src = URL.createObjectURL(file);
    },
    []
  );

  const downloadDecodedText = useCallback(() => {
    if (!decodedText) return;

    const blob = new Blob([decodedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "decoded-text.txt";
    link.click();
    URL.revokeObjectURL(url);
  }, [decodedText]);

  const handleMultipleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      setSelectedFiles(files);
    },
    []
  );

  const createVideo = useCallback(async () => {
    if (!isLoaded || selectedFiles.length === 0) return;

    setIsConverting(true);
    try {
      // Write all files to FFmpeg's virtual filesystem
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const data = await fetchFile(file);
        await ffmpeg.writeFile(
          `image${i.toString().padStart(4, "0")}.png`,
          data
        );
      }

      const outputFile = `output.${selectedFormat.value}`;

      // Create slideshow video from images
      const ffmpegArgs = [
        "-framerate",
        "1", // 1 frame per second
        "-pattern_type",
        "sequence",
        "-i",
        "image%04d.png",
      ];

      // Add format-specific encoding settings
      switch (selectedFormat.value) {
        case "3gp":
          ffmpegArgs.push(
            "-c:v",
            "mpeg4",
            "-b:v",
            "1M",
            "-r",
            "1",
            "-movflags",
            "+faststart"
          );
          break;
        case "avi":
          ffmpegArgs.push(
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "23",
            "-r",
            "1"
          );
          break;
        case "flv":
          ffmpegArgs.push("-c:v", "flv", "-qscale:v", "3", "-r", "1");
          break;
        case "mov":
          ffmpegArgs.push("-c:v", "prores_ks", "-profile:v", "3", "-r", "1");
          break;
        case "m4v":
          ffmpegArgs.push(
            "-c:v",
            "libx264",
            "-preset",
            "medium",
            "-crf",
            "23",
            "-r",
            "1",
            "-pix_fmt",
            "yuv420p"
          );
          break;
      }

      // Add output file
      ffmpegArgs.push(outputFile);

      // Execute FFmpeg command
      await ffmpeg.exec(ffmpegArgs);

      // Read the output video
      const data = await ffmpeg.readFile(outputFile);
      const blob = new Blob([data], { type: selectedFormat.mimeType });
      const url = URL.createObjectURL(blob);

      // Download the video
      const link = document.createElement("a");
      link.href = url;
      link.download = `encoded-sequence.${selectedFormat.value}`;
      link.click();
      URL.revokeObjectURL(url);

      // Clean up files
      for (let i = 0; i < selectedFiles.length; i++) {
        await ffmpeg.deleteFile(`image${i.toString().padStart(4, "0")}.png`);
      }
      await ffmpeg.deleteFile(outputFile);
    } catch (error) {
      console.error("Error creating video:", error);
      setLoadingError("Error creating video. Please try a different format.");
    } finally {
      setIsConverting(false);
      setSelectedFiles([]);
      if (multipleFilesInputRef.current) {
        multipleFilesInputRef.current.value = "";
      }
    }
  }, [ffmpeg, isLoaded, selectedFiles, selectedFormat]);

  const handleVideoUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setVideoFile(file);
      }
    },
    []
  );

  const decodeVideo = useCallback(async () => {
    if (!isLoaded || !videoFile) return;

    setIsConverting(true);
    try {
      // Write video file to FFmpeg's virtual filesystem
      const videoData = await fetchFile(videoFile);
      const inputFileName = `input.${videoFile.name.split(".").pop()}`;
      await ffmpeg.writeFile(inputFileName, videoData);

      // Extract frames from video
      await ffmpeg.exec([
        "-i",
        inputFileName,
        "-vsync",
        "0",
        "-frame_pts",
        "1",
        "frame_%d.png",
      ]);

      // Read and download all frames
      const frames = await ffmpeg.listDir("/");
      const pngFrames = frames.filter(
        (f) => f.name.startsWith("frame_") && f.name.endsWith(".png")
      );

      // Create a zip file containing all frames
      const zip = new JSZip();

      for (const frame of pngFrames) {
        const frameData = await ffmpeg.readFile(frame.name);
        zip.file(frame.name, frameData);
        await ffmpeg.deleteFile(frame.name);
      }

      // Download zip file
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "decoded-frames.zip";
      link.click();
      URL.revokeObjectURL(url);

      // Clean up
      await ffmpeg.deleteFile(inputFileName);
      setVideoFile(null);
      if (videoInputRef.current) {
        videoInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error decoding video:", error);
      setLoadingError("Error decoding video. Please try a different file.");
    } finally {
      setIsConverting(false);
    }
  }, [ffmpeg, isLoaded, videoFile]);

  const handleImageToEncode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      setImageToEncode(file);
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Draw image to temporary canvas to get pixel data
        const tempCanvas = document.createElement("canvas");
        const tempCtx = tempCanvas.getContext("2d");
        if (!tempCtx) return;

        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        tempCtx.drawImage(img, 0, 0);

        const imageData = tempCtx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        // Convert pixel data to binary string
        let binaryString = "";
        for (let i = 0; i < data.length; i += 4) {
          // Convert RGB values to binary
          binaryString += data[i].toString(2).padStart(8, "0"); // R
          binaryString += data[i + 1].toString(2).padStart(8, "0"); // G
          binaryString += data[i + 2].toString(2).padStart(8, "0"); // B
        }

        // Calculate dimensions for output image
        const size = Math.ceil(Math.sqrt(binaryString.length));
        canvas.width = size;
        canvas.height = size;

        // Create output image
        const outputImageData = ctx.createImageData(size, size);
        const outputData = outputImageData.data;

        // Fill image data
        for (let i = 0; i < binaryString.length; i++) {
          const value = binaryString[i] === "1" ? 255 : 0;
          const index = i * 4;
          outputData[index] = value; // R
          outputData[index + 1] = value; // G
          outputData[index + 2] = value; // B
          outputData[index + 3] = 255; // A
        }

        ctx.putImageData(outputImageData, 0, 0);
      };

      img.src = URL.createObjectURL(file);
    },
    []
  );

  const handleImageDecode = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Convert binary image back to RGB values
        let binaryString = "";
        for (let i = 0; i < data.length; i += 4) {
          binaryString += data[i] > 127 ? "1" : "0";
        }

        // Convert binary string back to RGB values
        const rgbValues = [];
        for (let i = 0; i < binaryString.length; i += 24) {
          const rgbBinary = binaryString.slice(i, i + 24);
          if (rgbBinary.length === 24) {
            const r = parseInt(rgbBinary.slice(0, 8), 2);
            const g = parseInt(rgbBinary.slice(8, 16), 2);
            const b = parseInt(rgbBinary.slice(16, 24), 2);
            rgbValues.push([r, g, b]);
          }
        }

        // Calculate dimensions for the output image
        const pixelCount = rgbValues.length;
        const size = Math.ceil(Math.sqrt(pixelCount));

        // Create output image
        const outputCanvas = document.createElement("canvas");
        const outputCtx = outputCanvas.getContext("2d");
        if (!outputCtx) return;

        outputCanvas.width = size;
        outputCanvas.height = size;
        const outputImageData = outputCtx.createImageData(size, size);
        const outputData = outputImageData.data;

        // Fill output image data
        for (let i = 0; i < rgbValues.length; i++) {
          const [r, g, b] = rgbValues[i];
          const index = i * 4;
          outputData[index] = r; // R
          outputData[index + 1] = g; // G
          outputData[index + 2] = b; // B
          outputData[index + 3] = 255; // A
        }

        outputCtx.putImageData(outputImageData, 0, 0);
        setDecodedImage(outputCanvas.toDataURL());
      };

      img.src = URL.createObjectURL(file);
    },
    []
  );

  const downloadDecodedImage = useCallback(() => {
    if (!decodedImage) return;

    const link = document.createElement("a");
    link.href = decodedImage;
    link.download = "decoded-image.png";
    link.click();
  }, [decodedImage]);

  const handleImageToBinary = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Convert pixel data to binary string
        let binaryString = "";
        for (let i = 0; i < data.length; i += 4) {
          // Convert RGB values to binary
          const r = data[i].toString(2).padStart(8, "0");
          const g = data[i + 1].toString(2).padStart(8, "0");
          const b = data[i + 2].toString(2).padStart(8, "0");
          binaryString += `${r}${g}${b}\n`; // Add newline for readability
        }

        setBinaryText(binaryString);
      };

      img.src = URL.createObjectURL(file);
    },
    []
  );

  const downloadBinaryText = useCallback(() => {
    if (!binaryText) return;

    const blob = new Blob([binaryText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "image-binary.txt";
    link.click();
    URL.revokeObjectURL(url);
  }, [binaryText]);

  const handleBinaryToImage = useCallback(() => {
    const binaryInput = binaryTextInputRef.current?.value;
    if (!binaryInput) return;

    try {
      // Split binary string into RGB values
      const rgbBinaries = binaryInput.trim().split("\n");
      const rgbValues = rgbBinaries
        .filter((bin) => bin.length === 24) // Ensure valid RGB binary (8+8+8 bits)
        .map((rgbBinary) => {
          const r = parseInt(rgbBinary.slice(0, 8), 2);
          const g = parseInt(rgbBinary.slice(8, 16), 2);
          const b = parseInt(rgbBinary.slice(16, 24), 2);
          return [r, g, b];
        });

      if (rgbValues.length === 0) {
        throw new Error("No valid RGB values found in binary text");
      }

      // Calculate dimensions for the output image
      const pixelCount = rgbValues.length;
      const size = Math.ceil(Math.sqrt(pixelCount));

      // Create canvas and context
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = size;
      canvas.height = size;
      const imageData = ctx.createImageData(size, size);
      const data = imageData.data;

      // Fill image data
      for (let i = 0; i < rgbValues.length; i++) {
        const [r, g, b] = rgbValues[i];
        const index = i * 4;
        data[index] = r; // R
        data[index + 1] = g; // G
        data[index + 2] = b; // B
        data[index + 3] = 255; // A
      }

      ctx.putImageData(imageData, 0, 0);
      setBinaryToImageResult(canvas.toDataURL());
    } catch (error) {
      console.error("Error converting binary to image:", error);
      alert(
        "Error converting binary to image. Please check the binary format."
      );
    }
  }, []);

  const downloadBinaryToImage = useCallback(() => {
    if (!binaryToImageResult) return;

    const link = document.createElement("a");
    link.href = binaryToImageResult;
    link.download = "binary-to-image.png";
    link.click();
  }, [binaryToImageResult]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-2xl w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Text to Image Encoder/Decoder
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Enter text to generate an encoded image or upload an image to decode
          </p>
        </div>

        <div className="space-y-6">
          {/* Encode Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Encode Text</h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your text here..."
            />

            <div className="flex gap-4">
              <Button
                onClick={generateImage}
                className="flex-1"
                disabled={!text}
              >
                Generate Image
              </Button>
              <Button
                onClick={downloadImage}
                variant="outline"
                className="flex-1"
                disabled={!text}
              >
                Download Image
              </Button>
            </div>
          </div>

          {/* Encode Image Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Encode Image</h3>
            <div className="flex gap-4">
              <input
                type="file"
                ref={imageToEncodeRef}
                onChange={handleImageToEncode}
                accept="image/*"
                className="hidden"
              />
              <Button
                onClick={() => imageToEncodeRef.current?.click()}
                className="flex-1"
              >
                Select Image to Encode
              </Button>
              <Button
                onClick={downloadImage}
                variant="outline"
                className="flex-1"
                disabled={!imageToEncode}
              >
                Download Encoded Image
              </Button>
            </div>
            {imageToEncode && (
              <p className="text-sm text-gray-600">
                Selected image: {imageToEncode.name}
              </p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Preview</span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <canvas
                ref={canvasRef}
                className="border border-gray-200 rounded"
                style={{
                  imageRendering: "pixelated",
                  width: "300px",
                  height: "300px",
                }}
              />
            </div>
          </div>

          {/* Video Creation Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Video Conversion</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <select
                  value={selectedFormat.value}
                  onChange={(e) => {
                    const format = VIDEO_FORMATS.find(
                      (f) => f.value === e.target.value
                    );
                    if (format) setSelectedFormat(format);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {VIDEO_FORMATS.map((format) => (
                    <option key={format.value} value={format.value}>
                      {format.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Encode to Video */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">
                  Encode PNGs to Video
                </h4>
                <div className="flex gap-4">
                  <input
                    type="file"
                    ref={multipleFilesInputRef}
                    onChange={handleMultipleFileUpload}
                    accept="image/png"
                    multiple
                    className="hidden"
                  />
                  <Button
                    onClick={() => multipleFilesInputRef.current?.click()}
                    variant="outline"
                    className="flex-1"
                    disabled={isConverting}
                  >
                    Select PNG Files
                  </Button>
                  <Button
                    onClick={createVideo}
                    className="flex-1"
                    disabled={
                      selectedFiles.length === 0 || isConverting || !isLoaded
                    }
                  >
                    {isConverting ? "Converting..." : "Create Video"}
                  </Button>
                </div>
                {selectedFiles.length > 0 && (
                  <p className="text-sm text-gray-600">
                    {selectedFiles.length} files selected
                  </p>
                )}
              </div>

              {/* Decode to PNGs */}
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700">
                  Decode Video to PNGs
                </h4>
                <div className="flex gap-4">
                  <input
                    type="file"
                    ref={videoInputRef}
                    onChange={handleVideoUpload}
                    accept=".3gp,.avi,.flv,.mov,.m4v"
                    className="hidden"
                  />
                  <Button
                    onClick={() => videoInputRef.current?.click()}
                    variant="outline"
                    className="flex-1"
                    disabled={isConverting}
                  >
                    Select Video
                  </Button>
                  <Button
                    onClick={decodeVideo}
                    className="flex-1"
                    disabled={!videoFile || isConverting || !isLoaded}
                  >
                    {isConverting ? "Decoding..." : "Extract Frames"}
                  </Button>
                </div>
                {videoFile && (
                  <p className="text-sm text-gray-600">
                    Selected video: {videoFile.name}
                  </p>
                )}
              </div>
            </div>
            {loadingError && (
              <p className="text-sm text-red-500">{loadingError}</p>
            )}
          </div>

          {/* Decode Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Decode Image</h3>
            <div className="flex gap-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/png"
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="flex-1"
              >
                Upload Image to Decode
              </Button>
            </div>

            {decodedText && (
              <div className="space-y-4">
                <textarea
                  value={decodedText}
                  readOnly
                  className="w-full h-32 p-3 border border-gray-300 rounded-md bg-gray-50"
                  placeholder="Decoded text will appear here..."
                />
                <Button
                  onClick={downloadDecodedText}
                  variant="outline"
                  className="w-full"
                >
                  Download Decoded Text
                </Button>
              </div>
            )}

            {/* Decode Image to Original */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Decode to Original Image
              </h3>
              <div className="flex gap-4">
                <input
                  type="file"
                  ref={decodeImageInputRef}
                  onChange={handleImageDecode}
                  accept="image/png"
                  className="hidden"
                />
                <Button
                  onClick={() => decodeImageInputRef.current?.click()}
                  variant="outline"
                  className="flex-1"
                >
                  Upload Encoded Image
                </Button>
                <Button
                  onClick={downloadDecodedImage}
                  variant="outline"
                  className="flex-1"
                  disabled={!decodedImage}
                >
                  Download Original Image
                </Button>
              </div>
              {decodedImage && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Decoded Image Preview:
                  </p>
                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                    <img
                      ref={decodedImageRef}
                      src={decodedImage}
                      alt="Decoded"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Image to Binary Text */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Convert Image to Binary</h3>
              <div className="flex gap-4">
                <input
                  type="file"
                  ref={imageToBinaryRef}
                  onChange={handleImageToBinary}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  onClick={() => imageToBinaryRef.current?.click()}
                  variant="outline"
                  className="flex-1"
                >
                  Select Image
                </Button>
                <Button
                  onClick={downloadBinaryText}
                  variant="outline"
                  className="flex-1"
                  disabled={!binaryText}
                >
                  Download Binary Text
                </Button>
              </div>
              {binaryText && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Binary Preview (first 1000 characters):
                  </p>
                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                    <pre className="text-xs overflow-auto max-h-40 font-mono">
                      {binaryText.slice(0, 1000)}
                      {binaryText.length > 1000 && "..."}
                    </pre>
                  </div>
                </div>
              )}
            </div>

            {/* Binary Text to Image */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Convert Binary to Image</h3>
              <textarea
                ref={binaryTextInputRef}
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono text-xs"
                placeholder="Paste binary text here (format: RRRRRRRRGGGGGGGGBBBBBBBB, one pixel per line)..."
              />
              <div className="flex gap-4">
                <Button onClick={handleBinaryToImage} className="flex-1">
                  Convert to Image
                </Button>
                <Button
                  onClick={downloadBinaryToImage}
                  variant="outline"
                  className="flex-1"
                  disabled={!binaryToImageResult}
                >
                  Download Image
                </Button>
              </div>
              {binaryToImageResult && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Converted Image Preview:
                  </p>
                  <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                    <img
                      src={binaryToImageResult}
                      alt="Converted from binary"
                      className="max-w-full h-auto"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
