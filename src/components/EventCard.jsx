import React from 'react';
import '../styles/EventCard.css';

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <a href={`/events/${event.id}`}>View Details</a>
        </div>
    );
};

export default EventCard;
