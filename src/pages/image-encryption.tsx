import { Button } from "@/components/ui/button";
import { useCallback, useRef, useState } from "react";

export default function ImageEncryptionPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
  const [decryptedImage, setDecryptedImage] = useState<string | null>(null);
  const [secretKey, setSecretKey] = useState("");
  const [decryptKey, setDecryptKey] = useState("");
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        setOriginalImage(reader.result as string);
        setEncryptedImage(null);
        setDecryptedImage(null);
        setError("");
      };
      reader.readAsDataURL(file);
    },
    []
  );

  // Generate a consistent numeric key from the secret key string
  const generateKeyFromString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash) % 256; // Ensure it's between 0-255
  };

  const encryptImage = useCallback(() => {
    if (!originalImage || !secretKey) {
      setError("Please provide both an image and a secret key");
      return;
    }

    const key = generateKeyFromString(secretKey);
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

      // XOR encryption with the generated key
      for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i] ^ key; // Red
        data[i + 1] = data[i + 1] ^ key; // Green
        data[i + 2] = data[i + 2] ^ key; // Blue
        // Alpha channel (i + 3) remains unchanged
      }

      ctx.putImageData(imageData, 0, 0);
      setEncryptedImage(canvas.toDataURL());
      setError("");
    };
    img.src = originalImage;
  }, [originalImage, secretKey]);

  const decryptImage = useCallback(() => {
    if (!encryptedImage || !decryptKey) {
      setError("Please provide both an encrypted image and the secret key");
      return;
    }

    const key = generateKeyFromString(decryptKey);
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

      // XOR decryption with the provided key
      for (let i = 0; i < data.length; i += 4) {
        data[i] = data[i] ^ key; // Red
        data[i + 1] = data[i + 1] ^ key; // Green
        data[i + 2] = data[i + 2] ^ key; // Blue
        // Alpha channel (i + 3) remains unchanged
      }

      ctx.putImageData(imageData, 0, 0);
      setDecryptedImage(canvas.toDataURL());
      setError("");
    };
    img.src = encryptedImage;
  }, [encryptedImage, decryptKey]);

  const downloadImage = useCallback((dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    link.click();
  }, []);

  const downloadAsBinary = useCallback((dataUrl: string, filename: string) => {
    // Convert base64 to binary
    const base64 = dataUrl.split(",")[1];
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/octet-stream" });

    // Download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Image Encryption/Decryption
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Upload an image and provide a secret key to encrypt/decrypt
          </p>
        </div>

        {error && (
          <div className="text-red-500 text-center text-sm">{error}</div>
        )}

        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
              >
                Upload Image
              </Button>
            </div>

            {/* Encryption Controls */}
            <div className="flex gap-4 justify-center">
              <input
                type="password"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                placeholder="Enter encryption key"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={encryptImage} disabled={!originalImage}>
                Encrypt Image
              </Button>
            </div>

            {/* Decryption Controls */}
            <div className="flex gap-4 justify-center">
              <input
                type="password"
                value={decryptKey}
                onChange={(e) => setDecryptKey(e.target.value)}
                placeholder="Enter decryption key"
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={decryptImage} disabled={!encryptedImage}>
                Decrypt Image
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Original Image */}
            <div className="space-y-2">
              <h3 className="font-semibold text-center">Original Image</h3>
              {originalImage && (
                <div className="space-y-2">
                  <div className="border border-gray-300 rounded-lg p-2">
                    <img
                      src={originalImage}
                      alt="Original"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <Button
                    onClick={() => downloadImage(originalImage, "original.png")}
                    variant="outline"
                    className="w-full"
                  >
                    Download Original
                  </Button>
                </div>
              )}
            </div>

            {/* Encrypted Image */}
            <div className="space-y-2">
              <h3 className="font-semibold text-center">Encrypted Image</h3>
              {encryptedImage && (
                <div className="space-y-2">
                  <div className="border border-gray-300 rounded-lg p-2">
                    <img
                      src={encryptedImage}
                      alt="Encrypted"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={() =>
                        downloadImage(encryptedImage, "encrypted.png")
                      }
                      variant="outline"
                      className="w-full"
                    >
                      Download as PNG
                    </Button>
                    <Button
                      onClick={() =>
                        downloadAsBinary(encryptedImage, "encrypted.dat")
                      }
                      variant="outline"
                      className="w-full"
                    >
                      Download as Binary
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Decrypted Image */}
            <div className="space-y-2">
              <h3 className="font-semibold text-center">Decrypted Image</h3>
              {decryptedImage && (
                <div className="space-y-2">
                  <div className="border border-gray-300 rounded-lg p-2">
                    <img
                      src={decryptedImage}
                      alt="Decrypted"
                      className="max-w-full h-auto"
                    />
                  </div>
                  <Button
                    onClick={() =>
                      downloadImage(decryptedImage, "decrypted.png")
                    }
                    variant="outline"
                    className="w-full"
                  >
                    Download Decrypted
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
