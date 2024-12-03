import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-media">
                    <a href="#" aria-label="Facebook" className="social-link">Facebook</a>
                    <a href="#" aria-label="Twitter" className="social-link">Twitter</a>
                    <a href="#" aria-label="Instagram" className="social-link">Instagram</a>
                </div>
                <div className="footer-policy">
                    <a href="#" className="policy-link">Privacy Policy</a>
                    <a href="#" className="policy-link">Refund Policy</a>
                </div>
                <div className="footer-note">
                    <p>&copy; 2024 GoPass. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
