import { Button } from "@/components/ui/button";
import { useState } from "react";
import ImageEncryptionPage from "./pages/image-encryption";
import TextToImagePage from "./pages/text-to-image";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "text-to-image" | "image-encryption"
  >("text-to-image");

  return (
    <div>
      <div className="flex justify-center gap-4 p-4 bg-white shadow-sm">
        <Button
          variant={currentPage === "text-to-image" ? "default" : "outline"}
          onClick={() => setCurrentPage("text-to-image")}
        >
          Text to Image
        </Button>
        <Button
          variant={currentPage === "image-encryption" ? "default" : "outline"}
          onClick={() => setCurrentPage("image-encryption")}
        >
          Image Encryption
        </Button>
      </div>

      {currentPage === "text-to-image" ? (
        <TextToImagePage />
      ) : (
        <ImageEncryptionPage />
      )}
    </div>
  );
}

export default App;
