import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";






const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-700 py-10">
        <div className="max-w-7xl mx-auto px-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <a href="#" className="block mb-4">
              <img src="parkvaahan-logo.png" alt="ParkVahan Logo" className="h-10" />
            </a>
            <h3 className="text-lg font-semibold text-blue-500">Get in Touch</h3>
            <p><a href="mailto:support@yourapp.com" className="text-white">support@yourapp.com</a></p>
            <p><a href="tel:+917899656711" className="text-white">+91 78996 56711 </a></p>
            <p className="text-white">123 Main St, Hyderabad, India</p>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-blue-500">About Us</h3>
            <p><a href="#" className="text-white hover:text-blue-500">Who We Are</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Leadership</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Client Partnerships</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Classic LMS</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Inclusion & Diversity</a></p>
          </div>

          <div className="w-full md:w-1/4 px-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-blue-500">Our Impact</h3>
            <p><a href="#" className="text-white hover:text-blue-500">Quality Education</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Decent Work & Economic Growth</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Client Engagement</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Industry Innovation & Infrastructure</a></p>
          </div>

          <div className="w-full md:w-1/4 px-4">
            <h3 className="text-lg font-semibold text-blue-500">Explore ParkVahan</h3>
            <p><a href="#" className="text-white hover:text-blue-500">Company Overview</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Careers at ParkVahan</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Terms of Use</a></p>
            <p><a href="#" className="text-white hover:text-blue-500">Privacy & Security</a></p>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">© 2025 ParkVahan. All rights reserved.</p>
          <div className="flex space-x-4">
      <Facebook className="w-6 h-6 text-white" />
      <Twitter className="w-6 h-6 text-white" />
      <Linkedin className="w-6 h-6 text-white" />
      <Youtube className="w-6 h-6 text-white" />
    </div>
        </div>
      </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
