const Header = () => {
  const phoneNumber = "+91 78996 56711";

  return (
    <div>
      <header className="bg-white p-5 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-12 w-auto mr-3 cursor-pointer"
              src="parkvaahan-logo.png"
              alt="ParkVaahan Logo"
            />
            <h1 className="text-[#01A1FF] text-3xl font-bold hidden md:block cursor-pointer">
              ParkVaahan
            </h1>
          </div>
          <button className="text-sm md:text-base">
            <a href={`tel:${phoneNumber}`} className="text-[#01A1FF] text-xl font-bold no-underline">
              Call: {phoneNumber}
            </a>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
