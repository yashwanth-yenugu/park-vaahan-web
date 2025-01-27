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
    // Reset form
    setFormData({ name: '', contact: '', area: '' });
  };

  return (
    <div className="bg-black">
      <div className="section-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
            <div className="w-full flex flex-col justify-center md:h-[75vh]">
            <h1 className="text-[#80b7f2] text-3xl md:text-5xl font-bold drop-shadow-[1px_1px_2px_white]">
              Find Nearby Parking Spaces When You Need Them
              </h1>
              <p className="text-slate-200 text-xl mt-2">
                Book secure, affordable parking in nearby apartments or gated communities.
                No more searching for parking—just park and go!
              </p>
            </div>

            </div>
          <div className="p-4 w-full flex flex-col justify-center" >
          <Accordion type="single" collapsible  className="flex flex-col items-center">
  <AccordionItem value="item-1" className="border-none md:w-3/4 w-full">
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
              Contact:
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
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter the area for parking"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
    <AccordionTrigger className="w-full md:w-1/2 bg-[#008CBA] text-white py-2 px-4 p-4 text-xl rounded-lg hover:bg-blue-600 hover:no-underline no-underline mb-5">
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
              Contact:
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
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter the area for parking"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
      </div>
      <div className="section-2 py-8">

      </div>
      <div className="section-3"></div>
      <div className="section-4"></div>
      <div className="section-5"></div>
      <div className="section-6"></div>
    </div>
  );
};

export default Home;
