import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import '../styles/Dashboard.css';

const Dashboard = ({ events }) => {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        setEventList(events); // Load event data from props
    }, [events]);

    return (
        <div className="dashboard">
            <div className="hero">
                <h1>GoPass: Your Event, Your Moment</h1>
                <input type="text" placeholder="Enter Event Name" />
                <button>Search</button>
            </div>
            {/* <div className="event-list">
                {eventList.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div> */}
        </div>
    );
};

export default Dashboard;
