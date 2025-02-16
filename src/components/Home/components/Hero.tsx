import StoreButtons from "@/components/StoreButtons/StoreButtons";
import ParkingForm from "./ParkingForm";

const Hero = () => {
  return (
    <section className="pt-16 md:py-8">
      <div className="max-w-7xl mx-auto px-8 mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center md:h-[75vh] text-center md:text-left space-y-6"
          >
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#80b7f2] w-fit mx-auto md:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-[#80b7f2] mr-2" />
              Smart Parking Solution
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl font-bold">
                <span className="text-white">Find Your Perfect </span>
                <span className="text-[#80b7f2]">Parking Space</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-2xl">
                Book secure, affordable parking in nearby apartments or gated
                communities. No more searching for parking—just park and go!
              </p>
            </div>
            <StoreButtons
              className="justify-center md:justify-start mt-8"
              imageClassName="md:h-12 h-10"
            />
          </div>
          <div className="w-full flex flex-col justify-center">
            <ParkingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
