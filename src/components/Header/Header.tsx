import { CONTACT_INFO } from "@/config/constants";

const Header = () => {
  return (
    <header className="bg-white p-4 fixed top-0 left-0 w-full z-50 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand Name */}
        <div className="flex items-cente gap-3">
          <img
            className="h-10 w-auto"
            src="parkvaahan-logo.png"
            alt="ParkVaahan Logo"
          />
          <span className="text-[25px] font-bold text-[#80b7f2] pt-1 md:pt-0   md:text-4xl">
            {CONTACT_INFO.companyName}
          </span>
        </div>

        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="text-[#80b7f2] text-xs pt-3 md:pt-0 md:text-lg font-bold hover:text-black transition"
        >
          Call: {CONTACT_INFO.phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
