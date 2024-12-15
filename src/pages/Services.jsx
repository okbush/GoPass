import React from 'react';
import '../styles/Services.css'; // Ensure the file exists for styling

const Services = () => {
    return (
        <section className="services-container">
            <h1>Our Services</h1>
            <p>
                Explore our range of services. We offer a comprehensive package for event management and ticketing. Let us make your event a success with our expert services.
            </p>
            <div className="service-list">
                <article className="service-item">
                    <h2>Book Tickets</h2>
                    <p>Book tickets to the latest events with ease.</p>
                </article>
                <article className="service-item">
                    <h2>Host Events</h2>
                    <p>Organize your own events with our end-to-end solutions.</p>
                </article>
                <article className="service-item">
                    <h2>UX Research</h2>
                    <p>Optimize your event experience with user-focused research.</p>
                </article>
                <article className="service-item">
                    <h2>Usability Testing</h2>
                    <p>Ensure a seamless user experience with our testing services.</p>
                </article>
            </div>
        </section>
    );
};

export default Services;
