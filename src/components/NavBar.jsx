import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Assuming the CSS file is named NavBar.css

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">GoPass</Link>
                <ul className="nav-links">
                    <li><Link to="/browse">Browse</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <Link to="/login" className="login-button">Login</Link>
            </div>
        </nav>
    );
}

export default NavBar;
