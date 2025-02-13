import { useState } from "react";
import ParkingForm from "./ParkingForm";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { Rocket } from "lucide-react";

const Hero = () => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); 
  };

  return (
    <section className="section-1 pt-16 md:py-8">
      <div className="max-w-7xl mx-auto px-8 mt-20">
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
            <div className="flex justify-center  md:justify-start gap-2 mt-8 mb-5">
              <img
                src="apple-store.svg"
                className="md:h-12 h-10  cursor-pointer"
                alt="Apple Store"
                onClick={handleClick}
              />
              <img
                src="google-play.svg"
                className="md:h-12 h-10 cursor-pointer"
                alt="Google Play"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className=" w-full flex flex-col justify-center">
            <ParkingForm />
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastProvider>
  {showToast && (
    <Toast className="bg-slate-800 justify-center items-center fixed bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col text-center w-[200px] rounded-lg">
      <div className="text-[#80b7f2] flex items-center">
        <p className="font-bold me-3">Coming Soon</p>
        <Rocket className="h-6 w-6 mx-auto mt-2" />
      </div>
    </Toast>
  )}
  <ToastViewport />
</ToastProvider>


    </section>
  );
};

export default Hero;
