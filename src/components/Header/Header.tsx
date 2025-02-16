import { CONTACT_INFO } from "@/config/constants";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#151c2c]/95 backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-auto"
            src="parkvaahan-logo.png"
            alt="ParkVaahan Logo"
          />
          <span className="text-2xl md:text-3xl font-bold">
            <span className="text-white">Park</span>
            <span className="text-[#80b7f2]">Vaahan</span>
          </span>
        </div>

        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-[#80b7f2] text-sm md:text-base font-medium"
        >
          <Phone className="h-4 w-4" />
          {CONTACT_INFO.phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
