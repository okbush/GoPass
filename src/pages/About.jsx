import React, { useState } from 'react';
import axios from 'axios';
import '../styles/About.css';

const AboutUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        try {
            console.log('Submitting form data:', formData); // Debugging step
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.status === 200) {
                setSubmissionStatus('Thank you for your message!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (error) {
            console.error('Error during submission:', error); // Log full error details
            setSubmissionStatus('Oops! Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="about-us">
            <header className="intro">
                <img src="logo.png" alt="GoPass Logo" className="logo" />
                <h1>Welcome to <span>GoPass</span></h1>
                <p>At <strong>GoPass</strong>, we make it easy to discover, book, and enjoy 
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
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {submissionStatus && (
                    <div className="submission-status">
                        <p>{submissionStatus}</p>
                    </div>
                )}

                <div className="contact-info">
                    <p><strong>📞 Phone:</strong> +1 800 123 456</p>
                    <p><strong>📧 Email:</strong> contact@gopass.com</p>
                    <p><strong>📍 Address:</strong> 123 Event Street, City, State, ZIP</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
