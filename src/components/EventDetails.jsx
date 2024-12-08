import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/EventDetails.css';

const EventDetails = ({ events }) => {
    const { id } = useParams();
    const event = events.find(event => event.id.toString() === id);

    if (!event) {
        return <div className="event-details">Event not found!</div>;
    }

    return (
        <div className="event-details">
            <img src={event.image} alt={event.title} className="event-details-image" />
            <h1>{event.title}</h1>
            <p className="event-organizer">
                organized by <a href={event.organizerLink}>{event.organizer}</a>
            </p>
            <div className="event-meta">
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Time:</strong> {event.time}</p>
            </div>
            <p>{event.description}</p>
            <a href={`/buy/${event.id}`} className="buy-tickets-link">Buy Tickets</a>
            <div className="additional-info">
                <h3>Event Guidelines and Policies</h3>
                <p>Follow the event's rules and guidelines for a safe and enjoyable experience.</p>
            </div>
        </div>
    );
};

export default EventDetails;
