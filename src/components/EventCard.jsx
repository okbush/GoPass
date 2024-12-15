import React, { useState } from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
    console.log('Rendering EventCard with:', event);

    // State to manage image loading
    const [imgSrc, setImgSrc] = useState(event.image ? `/images/${event.image}` : '/images/placeholder-image.jpg'); // Start with the event image or placeholder
    const [imgError, setImgError] = useState(false); // Track if there's an error loading the image

    // Fallback image URL
    const fallbackImage = '/images/placeholder-image'; // Path to your placeholder image

    // Handle image error
    const handleImageError = () => {
        setImgError(true); // Set error state to true
        setImgSrc(fallbackImage); // Set the image source to the fallback image
    };

    return (
        <div className="event-card">
            <div className="event-hero">
                <img 
                    src={imgError ? fallbackImage : imgSrc} // Use fallback if there's an error
                    alt={event.title} // Use event.title
                    className={`event-image ${imgError ? 'error' : ''}`} // Add error class if there's an error
                    onError={handleImageError} // Handle image loading error
                />
            </div>
            <div className="event-content">
                <h3>{event.title}</h3> 
                <p>{event.description}</p> 
                <a href={`/events/${event.id}`} className="event-link">View Details</a>
            </div>
        </div>
    );
};

export default EventCard;