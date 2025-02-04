import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration (optional)
      once: true, // Ensure the animation happens only once
    });
  }, []);
  return (
    <>
      <Toaster position="top-center" />
      <div>
        <Header></Header>
        <LandingPage></LandingPage>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
