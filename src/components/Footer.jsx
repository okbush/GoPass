import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <div className="social-media">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                <div className="footer-policy">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Refund Policy</a>
                </div>
                {/* <div>
                    <p>&copy; 2024 GoPass. All rights reserved.</p>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
