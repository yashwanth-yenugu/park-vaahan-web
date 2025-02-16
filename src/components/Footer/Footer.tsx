import StoreButtons from "@/components/StoreButtons/StoreButtons";
import { CONTACT_INFO } from "@/config/constants";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Rocket } from "lucide-react";
import toast from "react-hot-toast";

const Footer = () => {
  const handleSocialClick = (platform: "Facebook" | "X" | "Instagram") => {
    toast.success(`Coming soon on ${platform}`, {
      icon: <Rocket className="h-5 w-5 text-[#04AA6D]" />,
      duration: 3000,
    });
  };

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* Logo and Contact Section */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="parkvaahan-logo.png"
                alt="ParkVaahan Logo"
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
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div className="flex gap-4 justify-start md:justify-end">
              <button
                onClick={() => handleSocialClick("Facebook")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <SiFacebook size={20} className="text-white" />
              </button>
              <button
                onClick={() => handleSocialClick("X")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-black transition-colors"
              >
                <SiX size={20} className="text-white" />
              </button>
              <button
                onClick={() => handleSocialClick("Instagram")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition-colors"
              >
                <SiInstagram size={20} className="text-white" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <StoreButtons />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 ParkVaahan. All rights reserved.
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
    </footer>
  );
};

export default Footer;
