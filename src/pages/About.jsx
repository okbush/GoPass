import React from 'react';
import '../styles/About.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <header className="intro">
                <img src="logo.png" alt="GoPass Logo" className="logo" />
                <h1>Welcome to <span>GoPass</span></h1>
                <p>
                    At <strong>GoPass</strong>, we make it easy to discover, book, and enjoy 
                    the events that matter to you. Whether you’re securing 
                    tickets to your favorite concert, sports game, or theater show, 
                    or managing and promoting your own events, we’re here to 
                    simplify every step. Our intuitive platform ensures a smooth,
                    hassle-free experience—so you can focus on what truly matters: 
                    connecting with others and creating unforgettable moments.
                </p>
            </header>

            <section className="contact">
                <h2>Get in Touch</h2>
                <p>We’re here to answer any questions and support your journey with GoPass. Reach out to us today!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <p><strong>📞 Phone:</strong> +1234567 890</p>
                    <p><strong>📧 Email:</strong> contact@gopass.com</p>
                    <p><strong>📍 Address:</strong> 111 Street, City, State, ZIP</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
