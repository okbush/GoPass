import React, { useEffect, useState } from 'react';
import events from '../utils/api.js'; // Adjust the path as needed
import EventCard from './EventCard';
import './EventList.css';

const EventList = () => {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        // Simulate API call
        setEventList(events);
    }, []);

    return (
        <div className="event-list">
            {eventList.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
