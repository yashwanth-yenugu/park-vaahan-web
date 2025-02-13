import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { CONTACT_INFO } from "@/config/constants";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { siFacebook, siInstagram, siX } from "simple-icons";

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Contact Section */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="parkvaahan-logo.png"
                alt="ParkVahan Logo"
                className="h-8"
              />
              <span className="text-xl font-semibold text-white">
                {CONTACT_INFO.companyName}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Making parking hassle-free and efficient for everyone. Find or
              list parking spaces with ease.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-sm">{CONTACT_INFO.email}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <span className="text-sm">{CONTACT_INFO.phone}</span>
              </a>
              <p className="text-sm text-gray-400">{CONTACT_INFO.location}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white fill-current"
                >
                  <path d={siFacebook.path} />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white fill-current"
                >
                  <path d={siX.path} />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white fill-current"
                >
                  <path d={siInstagram.path} />
                </svg>
              </a>
            </div>
            <div className="flex justify-center items-center px-8 md:px-0 m-auto">
  <div className="flex gap-2 mt-8 justify-center">
    <img
      src="apple-store.svg"
      className="h-10 cursor-pointer"
      alt="Apple Store"
      onClick={handleClick}
    />
    <img
      src="google-play.svg"
      className="h-10 cursor-pointer"
      alt="Google Play"
      onClick={handleClick}
    />
  </div>
</div>


          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 ParkVahan. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
           <ToastProvider>
  {showToast && (
    <Toast className="bg-slate-800 justify-center items-center fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col text-center w-[200px] rounded-lg">
      <div className="text-[#80b7f2] flex items-center">
        <p className="font-bold me-3">Coming Soon</p>
        <Rocket className="h-6 w-6 mx-auto mt-2" />
      </div>
    </Toast>
  )}
  <ToastViewport />
</ToastProvider>
    </footer>
  );
};

export default Footer;
