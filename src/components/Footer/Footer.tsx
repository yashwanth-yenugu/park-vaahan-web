import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-700 py-10">
        <div className="max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <a href="#" className="block mb-4">
              <img src="parkvaahan-logo.png" alt="ParkVahan Logo" className="h-14" />
            </a>
            <p className="text-white">Offering India's best parking spots at unbeatable prices.</p>
            
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h3 className="text-3xl font-bold text-blue-300">Get in Touch</h3>
            <p><a href="mailto:connect@parkvaahan.in" className="text-white">connect@parkvaahan.in</a></p>
            <p><a href="tel:+917899656711" className="text-white">+91 78996 56711 </a></p>
            <p className="text-white">Madhapur, Hyderabad, India</p>
            <div className="flex space-x-4 mt-2">
            <a href=""><FaInstagram className="w-6 h-6 text-white" /></a>
            <a href=""><FaFacebook className="w-6 h-6 text-white" /></a>
            <a href=""><FaTwitter className="w-6 h-6 text-white" /></a>
            <a href=""><FaLinkedin className="w-6 h-6 text-white" /></a>
            <a href=""><FaYoutube className="w-6 h-6 text-white" /></a>
    
    </div>
            
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">© 2025 ParkVahan. All rights reserved.</p>
          <div className="flex gap-3 text-white">
            <a href="">Privacy Policy</a>
            <a href=""> Terms of Service</a>
         </div>
        </div>
      </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
