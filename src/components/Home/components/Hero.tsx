import ParkingForm from "./ParkingForm";

const Hero = () => {
  return (
    <section className="section-1 pt-16 md:py-8">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center md:h-[75vh] text-center md:text-left"
          >
            <h1 className="text-[#80b7f2] text-2xl md:text-6xl font-bold">
              Find Nearby Parking Spaces When You Need Them
            </h1>
            <p className="text-slate-200 md:text-2xl mt-2">
              Book secure, affordable parking in nearby apartments or gated
              communities. No more searching for parking—just park and go!
            </p>
          </div>
          <div className="p-4 w-full flex flex-col justify-center">
            <ParkingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
