import "../Home/HeroSection.css";
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className="hero-paragraph">
      <p>
        {" "}
        We strive to cultivate a dynamic environment where passion for technology thrives, encouraging continuous learning, teamwork, and the pursuit of excellence
      </p>
      <div className="hero-ctas">
        <a href="#AboutUs">About Us</a>
        <a href="#Testimonies">Testimonies</a>
        {/* <Link to="/AboutUs">About Us</Link>
        <Link to="/testimonials">Testimonials</Link> */}

      </div>
    </div>
  );
};
export default HeroSection;
