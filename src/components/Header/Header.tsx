const Header = () => {
  const phoneNumber = "+91 78996 56711";

  return (
    <header className="bg-white p-3 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="h-7 w-auto"
            src="parkvaahan-logo.png"
            alt="ParkVaahan Logo"
          />
        </div>
        <div className="text-gray-700 text-sm">Call: {phoneNumber}</div>
      </div>
    </header>
  );
};

export default Header;
