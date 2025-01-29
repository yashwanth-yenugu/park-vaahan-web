import { CONTACT_INFO } from "@/config/constants";

const Header = () => {
  return (
    <header className="bg-white p-3 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            className="h-7 w-auto"
            src="parkvaahan-logo.png"
            alt="ParkVaahan Logo"
          />
          <span className="text-lg font-semibold text-gray-800">
            {CONTACT_INFO.companyName}
          </span>
        </div>
        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="text-gray-700 text-sm hover:text-gray-900 transition-colors flex items-center gap-1"
        >
          Call: {CONTACT_INFO.phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
