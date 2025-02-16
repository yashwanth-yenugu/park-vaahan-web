import { Rocket } from "lucide-react";
import toast from "react-hot-toast";

interface StoreButtonsProps {
  className?: string;
  imageClassName?: string;
}

const StoreButtons = ({
  className = "",
  imageClassName = "h-10",
}: StoreButtonsProps) => {
  const handleStoreClick = (store: "apple" | "google") => {
    toast.success(
      `Coming soon on ${store === "apple" ? "App Store" : "Google Play"}`,
      {
        icon: <Rocket className="h-5 w-5 text-[#04AA6D]" />,
        duration: 3000,
      }
    );
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <img
        src="apple-store.svg"
        className={`${imageClassName} cursor-pointer`}
        alt="Apple Store"
        onClick={() => handleStoreClick("apple")}
      />
      <img
        src="google-play.svg"
        className={`${imageClassName} cursor-pointer`}
        alt="Google Play"
        onClick={() => handleStoreClick("google")}
      />
    </div>
  );
};

export default StoreButtons;
