
import { GoDotFill } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { CiMemoPad} from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import ParkingForm from "./ParkingForm";
import Testimonials from "./Testimonials";

const Home = () => {




  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-700 py-4">
      <section className="section-1 pt-16 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos="fade-up" className="w-full flex flex-col justify-center md:h-[75vh] text-center md:text-left">
            <h1 className="text-[#80b7f2] text-2xl md:text-6xl font-bold ">
              Find Nearby Parking Spaces <strong className="text-amber-300">When You Need Them</strong>
            </h1>
            <p className="text-gray-300 md:text-2xl font-bold mt-2">
              Book secure, affordable parking in nearby apartments or gated communities.
              No more searching for parking— just park and go!
              </p>
              </div>
          <div data-aos="fade-up" className="p-4 w-full flex flex-col justify-center" >
            <ParkingForm />
          </div>
          </div>
        </div>
      </section>
      <section className="section-2  md:py-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-1">
        <div data-aos="fade-up" className="">
        <p className="bg-gray-300  text-black text-left pl-3 pe-3 pt-1 pb-1 mb-2 border inline-flex items-center gap-1 rounded-3xl">
  <GoDotFill />
  Smart Parking Solution
</p>


          <h1 className="text-2xl text-left md:text-4xl font-bold text-white mb-5">
            Your Convenient Solution for <strong className="text-lime-300 mb-5">Finding Parking</strong>
          </h1>
          <p className="text-white text-left">
            Whether you’re struggling to find parking in a busy area or need a long-term spot near your home, our app connects you with available spaces in nearby apartments or gated communities. Forget the hassle of street parking—book your monthly parking spot easily and securely today.
          </p>
        </div>

        <div>
      <div
        
        className="mt-8 border-white border-2 p-[20px]  shadow-gray-50 rounded-xl hover:bg-slate-950 "
      >
        <h3 className="text-lime-300 text-xl font-bold mb-3 inline-flex items-center gap-2">
  <IoMdPerson /> For Parkers (Users):
</h3>
<ul data-aos="fade-up" className="space-y-2 text-white">
  <li className="flex items-center gap-2">
    <FaRegCheckCircle className="text-lime-300" /> Search for available parking spaces in nearby apartments or gated communities.
  </li>
  <li className="flex items-center gap-2">
    <FaRegCheckCircle className="text-lime-300" /> Book monthly parking at affordable rates with secure payment options.
  </li>
  <li className="flex items-center gap-2">
    <FaRegCheckCircle className="text-lime-300" /> Find parking close to your home, saving time and avoiding the stress of street parking.
  </li>
</ul>
      </div>
    </div>

    <div className="mt-8 border-white border-2 p-[20px] shadow-gray-50 rounded-xl hover:bg-slate-950 ">
  <h3 className="text-lime-300 text-lg font-bold mb-3 inline-flex items-center gap-2">
    <CiMemoPad /> For Space Owners:
  </h3>
  <ul data-aos="fade-up" className="space-y-2 text-white">
    <li className="flex items-center gap-2">
      <FaRegCheckCircle className="text-lime-300" /> List available parking spaces in your apartment or gated community.
    </li>
    <li className="flex items-center gap-2">
      <FaRegCheckCircle className="text-lime-300" /> Set your pricing and availability to earn passive income.
    </li>
    <li className="flex items-center gap-2">
      <FaRegCheckCircle className="text-lime-300" /> Manage and monitor bookings effortlessly.
    </li>
  </ul>
</div>
      </div>

      
      <div data-aos="fade-up"  className="text-white flex justify-center items-center md:col-span-1">
  <img 
    src="parking-image.png" 
    className="p-10 transform transition duration-300 hover:scale-90" 
    alt="Parking"
  />
</div>


    </div>
  </div>
</section >

<section className="section-3 py-12">
  <div className="max-w-7xl mx-auto px-4">
      <h2 data-aos="fade-down"   className="text-center text-4xl font-bold text-blue-500 mb-8">How It Works</h2>
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between">
          
         
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold my-4 text-white inline-flex items-center gap-2"> <IoMdPerson/> For Parkers (Users):</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6 data-aos="fade-up" className="text-lg font-bold text-green-600">Search Nearby</h6>
                  <p data-aos="fade-up" className="text-gray-600">Use the app to find available parking spaces in apartments or gated communities near you.</p>
                </div>
                {/* <img src="search-logo.png" alt="Search Nearby Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6 data-aos="fade-up"  className="text-lg font-bold text-green-600">Book Space for Your Car</h6>
                  <p data-aos="fade-up"  className="text-gray-600">Select a space that fits your needs and book it for a monthly fee.</p>
                </div>
                {/* <img src="book-space.png" alt="Book Space Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6 data-aos="fade-up"   className="text-lg font-bold text-green-600">Parking</h6>
                  <p data-aos="fade-up"   className="text-gray-600">Enjoy guaranteed, secure parking without the hassle of street parking.</p>
                </div>
                {/* <img src="parking-1.jpg" alt="Parking Logo" className="w-20 h-auto ml-4" /> */}
              </div>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold my-4 text-white inline-flex items-center gap-2"><CiMemoPad />For Space Owners:</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6 data-aos="fade-up" className="text-lg font-bold text-green-600">Affordable</h6>
                  <p data-aos="fade-up"  className="text-gray-600">Save money with competitive monthly parking rates, reducing your daily parking expenses.</p>
                </div>
                {/* <img src="Affordable.jpg" alt="Affordable Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6 data-aos="fade-up"  className="text-lg font-bold text-green-600">Stress-Free</h6>
                  <p data-aos="fade-up"  className="text-gray-600">Passive Income: Earn money by listing your unused parking spaces.</p>
                </div>
                {/* <img src="stress-free.jpg" alt="Stress-Free Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6 data-aos="fade-up"  className="text-lg font-bold text-green-600">Community Focused</h6>
                  <p  data-aos="fade-up" className="text-gray-600">Help your neighbors by providing secure parking options.</p>
                </div>
                {/* <img src="Community-Focused.jpg" alt="Community Focused Logo" className="w-20 h-auto ml-4" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className="section-4 mt-12">
        <div className="container mx-auto text-center">
          <Testimonials/>
        </div>
      </section>
      <section className="section-5">
      <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 w-full flex flex-col justify-center" >
          <ParkingForm />

          </div>
          <div data-aos="fade-up"  className=" w-full flex flex-col justify-center md:h-[75vh] text-center md:text-left">
            <h1 className="text-[#80b7f2] text-2xl md:text-6xl font-bold mb-5">
            Your Perfect Parking Spot Awaits – <strong className="text-white">Find or List Now!</strong>
            </h1>
            <p className="text-gray-300 md:text-2xl font-bold mt-2">
            Join our community today and start enjoying the convenience of easy, reliable parking, or earn passive income by listing your available spaces.
              </p>
              </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Home;
