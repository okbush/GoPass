import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = ({ logoSrc = "/logo_invert.png", logoAlt = "GoPass Logo" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header className="navbar">
        <div className="navbar-logo">
          <img src={logoSrc} alt={logoAlt} className="logo" />
          <Link to="/"> GoPass</Link>
        </div>
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Events</Link>
            </li>
            <li className={location.pathname === '/services' ? 'active' : ''}> 
              <Link to="/services">Organizations</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-login">
          <Link to="/login">Log In</Link>
        </div>
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu} 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </header>
    );
};

export default NavBar;