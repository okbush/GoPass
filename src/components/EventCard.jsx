import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
    console.log('Rendering EventCard with:', event);

    return (
        <div className="event-card">
            <div className="event-hero">
                <img 
                    src={`${import.meta.env.VITE_API_URL}/${event.Image}`} 
                    alt={event.EventName} 
                    className="event-image" 
                />
            </div>
            <div className="event-content">
                <h3>{event.EventName}</h3>
                <p>{event.Description}</p>
                <a href={`/events/${event.EventID}`} className="event-link">View Details</a>
            </div>
        </div>
    );
};


export default EventCard;
