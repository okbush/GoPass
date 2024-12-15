import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../styles/NavBar.css'; 

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="/">GoPass</Link>
        </div>
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
            </li>
            <li className={location.pathname === '/services' ? 'active' : ''}>
              <Link to="/services">Services</Link>
            </li>
            <li className={location.pathname === '/contact' ? 'active' : ''}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-login">
          <Link to="/login">Log In</Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>
    );
};

export default NavBar;