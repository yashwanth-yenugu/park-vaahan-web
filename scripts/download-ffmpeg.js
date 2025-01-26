import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

async function downloadFile(url) {
  const response = await fetch(url);
  return response.arrayBuffer();
}

async function main() {
  const ffmpegDir = join(__dirname, "../public/ffmpeg");

  try {
    await mkdir(ffmpegDir, { recursive: true });

    const files = [
      {
        name: "ffmpeg-core.js",
        url: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.js",
      },
      {
        name: "ffmpeg-core.wasm",
        url: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.wasm",
      },
      {
        name: "ffmpeg-core.worker.js",
        url: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm/ffmpeg-core.worker.js",
      },
    ];

    for (const file of files) {
      console.log(`Downloading ${file.name}...`);
      const data = await downloadFile(file.url);
      await writeFile(join(ffmpegDir, file.name), Buffer.from(data));
      console.log(`Downloaded ${file.name}`);
    }

    console.log("All files downloaded successfully!");
  } catch (error) {
    console.error("Error downloading files:", error);
    process.exit(1);
  }
}

main();
