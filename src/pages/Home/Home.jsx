import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import Testimonies from "./Testimonies";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <AboutUs />
      <Testimonies />
    </div>
  );
};
export default Home;
