import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/EventDetails.css';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/api/event/${id}`;
                console.log('Fetching event from URL:', url);
                const response = await axios.get(url);
                setEvent(response.data.data); // Set the event data correctly
            } catch (err) {
                setError('Failed to fetch event details. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) {
        return <div className="event-details">Loading...</div>;
    }

    if (error) {
        return <div className="event-details">Error: {error}</div>;
    }

    if (!event) {
        return <div className="event-details">Event not found!</div>;
    }

    return (
        <div className="event-details">
            <div className="event-header">
                <img 
                    src={`${import.meta.env.VITE_API_URL}/${event.image}`} 
                    alt={event.title} 
                    className="event-details-image" 
                />
                <h1>{event.title}</h1>
                <p className="event-organizer">
                    Organized by <strong>{event.organizer}</strong>
                </p>
                <p className="event-venue">
                    Venue: <strong>{event.venue}</strong>
                </p>
                <p className="event-date">
                    Date: <strong>{new Date(event.date).toLocaleDateString()}</strong>
                </p>
                <p className="event-time">
                    Time: <strong>{event.time}</strong>
                </p>
            </div>
            <div className="event-description">
                <h2>Description</h2>
                <p>{event.description}</p>
            </div>
            <div className="event-actions">
                <a href={`/buy/${event.id}`} className="buy-tickets-link">Buy Tickets</a>
            </div>
        </div>
    );
};

export default EventDetails;