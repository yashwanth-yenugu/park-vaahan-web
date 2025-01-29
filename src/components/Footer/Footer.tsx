import { CONTACT_INFO } from "@/config/constants";
import { siFacebook, siInstagram, siX } from "simple-icons";

const Footer = () => {
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
          <div className="flex gap-4">
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
    </footer>
  );
};

export default Footer;
