import { CONTACT_INFO } from "@/config/constants";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#151c2c]/95 backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            className="h-8 sm:h-10 w-auto"
            src="parkvaahan-logo.png"
            alt="ParkVaahan Logo"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-white">Park</span>
            <span className="text-[#80b7f2]">Vaahan</span>
          </span>
        </div>

        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-[#80b7f2] text-xs sm:text-sm md:text-base font-medium whitespace-nowrap"
        >
          <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          {CONTACT_INFO.phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
