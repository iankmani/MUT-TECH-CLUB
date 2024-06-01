import Header from "./Header/Header";
import HeroSection from "./pages/Home/Hero Section/HeroSection";
import AboutUs from "./pages/Home/AboutUs/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
