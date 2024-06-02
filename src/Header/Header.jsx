import "../Header/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="heading">MUT CLUB</h1>
      <div className="header-links">
        <ol className="header-link-list">
          <li className="header-link-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-link-item">
            <Link to="/Leadership">Leadership</Link>
          </li>
          <li className="header-link-item">
            <Link to="/Events">Events</Link>
          </li>
          <li className="header-link-item">
            <Link to="/Tracks">Tracks</Link>
          </li>
          
        </ol>
        
      </div>
    </div>
  );
};
export default Header;
