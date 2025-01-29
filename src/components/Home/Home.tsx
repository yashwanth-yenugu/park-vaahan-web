import Features from "./components/Features";
import Hero from "./components/Hero";
import ParkingForm from "./components/ParkingForm";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div className="bg-[#151c2c] min-h-screen">
      <Hero />
      <Features />
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              data-aos="fade-up"
              className="w-full flex flex-col justify-center space-y-6 order-1 md:order-none"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-[#80b7f2]">
                Ready to Find <br /> or List Parking?
              </h1>
              <p className="text-gray-300 text-lg md:text-xl">
                Join our community today and start enjoying the convenience of
                easy, reliable parking, or earn passive income by listing your
                available spaces.
              </p>
            </div>
            <div className="p-4 w-full flex flex-col justify-center order-2 md:order-none">
              <ParkingForm />
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
