import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    area: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', contact: '', area: '' });
  };
  const testimonials = [
    {
      image: "user1.jpg",
      name: "Ravi",
      rating: 5,
      review: "I used to spend so much time looking for parking every day. This app made it so easy to find a spot near my home, and I don’t have to worry anymore!"
    },
    {
      image: "user2.jpg",
      name: "Neha",
      rating: 4,
      review: "Listing my parking space has been a great way to earn extra money every month, and it’s been super easy to manage"
    },
    {
      image: "user3.jpg",
      name: "Mahi",
      rating: 5,
      review: "Secure and convenient parking options. Love it!"
    }
  ];
  // bg-gradient-to-r from-orange-400 to-pink-600
  // bg-gradient-to-r from-cyan-400 to-blue-600
  // bg-gradient-to-r from-purple-700 to-pink-500
  // bg-gradient-to-r from-green-500 to-teal-700
  // bg-gradient-to-r from-indigo-900 to-purple-700
  // bg-gradient-to-r from-red-500 to-blue-500
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-700 py-4">
      <section className="section-1 pt-16 md:py-8">
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div data-aos="fade-up" className="w-full flex flex-col justify-center md:h-[75vh] text-center md:text-left">
            <h1 className="text-[#80b7f2] text-2xl md:text-6xl font-bold ">
              Find Nearby Parking Spaces When You Need Them
            </h1>
            <p className="text-slate-200 md:text-2xl mt-2">
              Book secure, affordable parking in nearby apartments or gated communities.
              No more searching for parking—just park and go!
              </p>
              </div>
          <div className="p-4 w-full flex flex-col justify-center" >
          <Accordion type="single" collapsible  className="flex flex-col items-center">
  <AccordionItem value="item-1" className="border-none md:w-3/4 w-full">
    <AccordionTrigger data-aos="fade-up" className="w-full md:w-1/2 bg-[#04AA6D] text-white py-2 px-4 p-4 text-xl rounded-lg hover:bg-green-500 hover:no-underline no-underline mb-5">
    I’m Looking for Parking
    </AccordionTrigger>
    <AccordionContent className="no-underline">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="text-gray-700 text-left font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="contact" className="text-gray-700 text-left font-semibold mb-1">
              Phone Number:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact details"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
  <label htmlFor="area" className="text-gray-700 text-left font-semibold mb-1">
    Area:
  </label>
  <textarea
    id="area"
    name="area"
    value={formData.area}
    onChange={handleChange}
    placeholder="Enter the area for parking"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    rows={4} // Adjust rows as needed
  />
</div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-none no-underline md:w-3/4 w-full" >
    <AccordionTrigger data-aos="fade-up"  className="w-full md:w-1/2 bg-[#008CBA] text-white py-2 px-4 p-4 text-xl rounded-lg hover:bg-blue-600 hover:no-underline no-underline mb-5">
    I Want to List Parking Space
    </AccordionTrigger>
    <AccordionContent>
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="text-gray-700 text-left font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="contact" className="text-gray-700 text-left font-semibold mb-1">
              Phone Number:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact details"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
  <label htmlFor="area" className="text-gray-700 text-left font-semibold mb-1">
    Area:
  </label>
  <textarea
    id="area"
    name="area"
    value={formData.area}
    onChange={handleChange}
    placeholder="Enter the area for parking"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    rows={4} // Adjust rows as needed
  />
</div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

          </div>
          </div>
        </div>
      </section>
      <section className="section-2  md:py-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-1">
        <div data-aos="slide-right" className="">
          <h1 className="text-2xl text-center md:text-left md:text-5xl font-bold text-green-600 mb-5  md:drop-shadow-[1px_1px_1px_white]">
            Your Convenient Solution <br />for Finding Parking
          </h1>
          <p className="text-white text-center md:text-left">
            Whether you’re struggling to find parking in a busy area or need a long-term spot near your home, our app connects you with available spaces in nearby apartments or gated communities. Forget the hassle of street parking—book your monthly parking spot easily and securely today.
          </p>
        </div>

        <div>
      <div
        
        className="mt-8 border-white border-2 p-[20px] shadow-[1px_3px_4px_2px_rgba(255,255,255,0.5)] shadow-gray-50 rounded-xl transform transition duration-300 hover:scale-110"
      >
        <h3 className="text-teal-600 text-lg font-semibold mb-3">For Parkers (Users):</h3>
        <ul data-aos="slide-right" className="list-disc text-white pl-5">
          <li>Search for available parking spaces in nearby apartments or gated communities.</li>
          <li>Book monthly parking at affordable rates with secure payment options.</li>
          <li>Find parking close to your home, saving time and avoiding the stress of street parking.</li>
        </ul>
      </div>
    </div>

        <div  className="mt-8 border-white border-2 p-[20px] shadow-[1px_3px_4px_2px_rgba(255,255,255,0.5)]  shadow-gray-50 rounded-xl transform transition duration-300 hover:scale-110">
          <h3 className="text-teal-600 text-lg font-semibold mb-3">For Space Owners:</h3>
          <ul data-aos="slide-right" className="list-disc text-white pl-5">
            <li>List available parking spaces in your apartment or gated community.</li>
            <li>Set your pricing and availability to earn passive income.</li>
            <li>Manage and monitor bookings effortlessly.</li>
          </ul>
        </div>
      </div>

      
      <div data-aos="fade-up"  className="text-white flex justify-center items-center md:col-span-1">
  <img 
    src="parking-image.png" 
    className="p-10 transform transition duration-300 hover:scale-110" 
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
            <h3 className="text-2xl font-semibold my-4 text-white">For Parkers (Users):</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6  className="text-lg font-bold text-green-600">Search Nearby</h6>
                  <p  className="text-gray-600">Use the app to find available parking spaces in apartments or gated communities near you.</p>
                </div>
                {/* <img src="search-logo.png" alt="Search Nearby Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6  className="text-lg font-bold text-green-600">Book Space for Your Car</h6>
                  <p className="text-gray-600">Select a space that fits your needs and book it for a monthly fee.</p>
                </div>
                {/* <img src="book-space.png" alt="Book Space Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6  className="text-lg font-bold text-green-600">Parking</h6>
                  <p   className="text-gray-600">Enjoy guaranteed, secure parking without the hassle of street parking.</p>
                </div>
                {/* <img src="parking-1.jpg" alt="Parking Logo" className="w-20 h-auto ml-4" /> */}
              </div>
            </div>
          </div>

          
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-semibold my-4 text-white">For Space Owners:</h3>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6  className="text-lg font-bold text-green-600">Affordable</h6>
                  <p   className="text-gray-600">Save money with competitive monthly parking rates, reducing your daily parking expenses.</p>
                </div>
                {/* <img src="Affordable.jpg" alt="Affordable Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6  className="text-lg font-bold text-green-600">Stress-Free</h6>
                  <p   className="text-gray-600">Passive Income: Earn money by listing your unused parking spaces.</p>
                </div>
                {/* <img src="stress-free.jpg" alt="Stress-Free Logo" className="w-20 h-auto ml-4" /> */}
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                <div>
                  <h6  className="text-lg font-bold text-green-600">Community Focused</h6>
                  <p   className="text-gray-600">Help your neighbors by providing secure parking options.</p>
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">What Our Users Are Saying</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md max-w-xs">
                {/* <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                /> */}
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-yellow-500">{"⭐".repeat(testimonial.rating)}</p>
                <p className="text-gray-600 mt-2">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-5">
      <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-4 w-full flex flex-col justify-center" >
          <Accordion type="single" collapsible  className="flex flex-col items-center">
  <AccordionItem data-aos="slide-right" value="item-1" className="border-none md:w-3/4 w-full">
    <AccordionTrigger className="w-full md:w-1/2 bg-[#04AA6D] text-white py-2 px-4 p-4 text-xl rounded-lg hover:bg-green-500 hover:no-underline no-underline mb-5">
    I’m Looking for Parking
    </AccordionTrigger>
    <AccordionContent className="no-underline">
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="text-gray-700 text-left font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="contact" className="text-gray-700 text-left font-semibold mb-1">
              Phone Number:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact details"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
  <label htmlFor="area" className="text-gray-700 text-left font-semibold mb-1">
    Area:
  </label>
  <textarea
    id="area"
    name="area"
    value={formData.area}
    onChange={handleChange}
    placeholder="Enter the area for parking"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    rows={4} // Adjust rows as needed
  />
</div>


          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value="item-2" className="border-none no-underline md:w-3/4 w-full" >
    <AccordionTrigger data-aos="slide-right"  className="w-full md:w-1/2 bg-[#008CBA] text-white py-2 px-4 p-4 text-xl rounded-lg hover:bg-blue-600 hover:no-underline no-underline mb-5">
    I Want to List Parking Space
    </AccordionTrigger>
    <AccordionContent>
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="text-gray-700 text-left font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
            <label htmlFor="contact" className="text-gray-700 text-left font-semibold mb-1">
              Phone Number:
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact details"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="form-group flex flex-col">
  <label htmlFor="area" className="text-gray-700 text-left font-semibold mb-1">
    Area:
  </label>
  <textarea
    id="area"
    name="area"
    value={formData.area}
    onChange={handleChange}
    placeholder="Enter the area for parking"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    rows={4} // Adjust rows as needed
  />
</div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

          </div>
          <div data-aos="fade-up"  className=" w-full flex flex-col justify-center md:h-[75vh] text-center md:text-left">
            <h1 className="text-[#80b7f2] text-2xl md:text-6xl font-bold md:drop-shadow-[1px_1px_1px_white] mb-5">
            Ready to Find <br /> or List Parking?
            </h1>
            <p className="text-slate-200 md:text-2xl mt-2">
            Join our community today and start enjoying the convenience of easy, reliable parking, or earn passive income by listing your available spaces.
              </p>
              </div>
          </div>
        </div>
      </section>
      <section className="section-6"></section>
    </div>
  );
};

export default Home;
