import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <nav className="social-media">
                    <a href="https://www.facebook.com" aria-label="Facebook" className="social-link">Facebook</a>
                    <a href="https://www.twitter.com" aria-label="Twitter" className="social-link">Twitter</a>
                    <a href="https://www.instagram.com" aria-label="Instagram" className="social-link">Instagram</a>
                </nav>
                <nav className="footer-policy">
                    <a href="/privacy-policy" className="policy-link">Privacy Policy</a>
                    <a href="/refund-policy" className="policy-link">Refund Policy</a>
                </nav>
                <div className="footer-note">
                    <p>&copy; 2024 GoPass. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;