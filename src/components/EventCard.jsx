import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => (
    <div className="event-card">
        <div className="event-hero">
            <img src={event.image} alt={event.title} className="event-image" />
        </div>
        <div className="event-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <a href={`/events/${event.id}`} className="event-link">View Details</a>
        </div>
    </div>
);

export default EventCard;
