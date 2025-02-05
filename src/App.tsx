import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/Home/Home";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from "react-router-dom";
import Terms from "./components/Footer/Terms";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </header>

      {/* Main Content with padding to avoid header overlap */}
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* Fixed Footer */}
      <footer className="mt-auto bg-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
