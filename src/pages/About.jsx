import React from 'react';
import '../styles/About.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="intro">
                <h1>About <span>GoPass</span></h1>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <section className="services">
                <h2>Services</h2>
                <p>
                    Explore our range of services. We offer a comprehensive package for event management and ticketing.
                    Let us make your event a success with our expert services.
                </p>
                <div className="services-list">
                    <div className="service-item">
                        <h3>Book Tickets</h3>
                        <p>Book tickets to the latest events with ease.</p>
                    </div>
                    <div className="service-item">
                        <h3>Host Events</h3>
                        <p>Organize your own events with our end-to-end solutions.</p>
                    </div>
                    <div className="service-item">
                        <h3>UX Research</h3>
                        <p>Optimize your event experience with user-focused research.</p>
                    </div>
                    <div className="service-item">
                        <h3>Usability Testing</h3>
                        <p>Ensure a seamless user experience with our testing services.</p>
                    </div>
                </div>
            </section>
            <section className="contact">
                <h2>Get in Touch</h2>
                <p>Have a question or want to know more about our services? Drop us a line and we’ll get back to you as soon as possible.</p>
                <form className="contact-form" aria-label="Contact Form">
                    <input type="text" placeholder="Your Name" aria-label="Your Name" required />
                    <input type="email" placeholder="Your Email" aria-label="Your Email" required />
                    <input type="text" placeholder="Subject" aria-label="Subject" required />
                    <textarea placeholder="Your Message" aria-label="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-info">
                    <p><strong>Phone:</strong> +1 800 123 456</p>
                    <p><strong>Email:</strong> contact@gopass.com</p>
                    <p><strong>Address:</strong> 123 Event Street, City, State, ZIP</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;