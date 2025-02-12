import { BookText, SquareUserRound } from 'lucide-react';
const HowItWoks = () => {
  return (
    <div>
    <section className="section-3 py-12">
    <div className="max-w-7xl mx-auto px-4">
        <h2 data-aos="fade-down"   className="text-center text-4xl font-bold text-[#80b7f2] mb-8">How It Works</h2>
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-between">
            
           
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-semibold my-4 text-white inline-flex items-center gap-2">  <SquareUserRound /> For Parkers (Users):</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-stone-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                  <div>
                    <h6  className="text-lg font-bold text-green-600">Search Nearby</h6>
                    <p className="text-gray-600">Use the app to find available parking spaces in apartments or gated communities near you.</p>
                  </div>
                 
                </div>
                <div  className="flex items-center p-4 bg-stone-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                  <div>
                    <h6  className="text-lg font-bold text-green-600">Book Space for Your Car</h6>
                    <p   className="text-gray-600">Select a space that fits your needs and book it for a monthly fee.</p>
                  </div>
                 
                </div>
                <div className="flex items-center p-4 bg-stone-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                  <div>
                    <h6  className="text-lg font-bold text-green-600">Parking</h6>
                    <p    className="text-gray-600">Enjoy guaranteed, secure parking without the hassle of street parking.</p>
                  </div>
                  
                </div>
              </div>
            </div>
  
            
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-2xl font-semibold my-4 text-white inline-flex items-center gap-2"><BookText />For Space Owners:</h3>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-stone-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                  <div>
                    <h6  className="text-lg font-bold text-green-600">Affordable</h6>
                    <p  className="text-gray-600">Save money with competitive monthly parking rates, reducing your daily parking expenses.</p>
                  </div>
                  
                </div>
                <div className="flex items-center p-4 bg-stone-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                  <div>
                    <h6   className="text-lg font-bold text-green-600">Stress-Free</h6>
                    <p   className="text-gray-600">Passive Income: Earn money by listing your unused parking spaces.</p>
                  </div>
                  
                </div>
                <div className="flex items-center p-4 bg-stone-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                  <div>
                    <h6  className="text-lg font-bold text-green-600">Community Focused</h6>
                    <p  className="text-gray-600">Help your neighbors by providing secure parking options.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWoks
