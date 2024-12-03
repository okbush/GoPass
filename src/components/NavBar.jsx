import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 

const NavBar = () => {
    return (
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="/">GoPass</Link>
        </div>
        <nav className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-login">
          <Link to="/login">Log In</Link>
        </div>
      </header>
    );
  };
  
  export default NavBar;
  