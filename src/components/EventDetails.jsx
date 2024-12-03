import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/EventDetails.css';
import events from '../utils/api';

function EventDetails() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        // Fetch event details from API (placeholder for now)
        setEvent({
            id,
            title: 'Pinoy Indie Film Festival',
            description: 'A festival celebrating independent films from the Philippines.',
            image: 'path-to-image',
        });
    }, [id]);

    if (!event) return <div>Loading...</div>;

    return (
        <div className="event-details">
            <img src={event.image} alt={event.title} />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
        </div>
    );
}

export default EventDetails;
