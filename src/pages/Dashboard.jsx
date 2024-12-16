import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { fetchEvents } from '../utils/api'; // Fetch function from api.js
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [eventList, setEventList] = useState([]); // Full list of events
    const [filteredEvents, setFilteredEvents] = useState([]); // Filtered events for display
    const [searchQuery, setSearchQuery] = useState(''); // User's search input

    // Fetch events from API
    useEffect(() => {
        const loadEvents = async () => {
            const events = await fetchEvents(); // Fetch events
            console.log('Fetched events:', events); // Log the fetched data
            if (Array.isArray(events)) {
                setEventList(events); // Save all events
                setFilteredEvents(events); // Initially show all events
            } else {
                console.error('Events data is not an array:', events);
            }
        };

        loadEvents();
    }, []);

    // Handle search query change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter events based on query
        const filtered = eventList.filter((event) =>
            event.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered);
    };

    return (
        <div className="dashboard">
            <div className="hero">
                <h1>GoPass: Your Event, Your Moment</h1>
                <input
                    type="text"
                    placeholder="Enter Event Name"
                    value={searchQuery}
                    onChange={handleSearchChange} // Update query on input change
                />
            </div>
            <div className="event-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={`${event.id}-${event.title}`} event={event} /> // Ensure unique key
                    ))
                ) : (
                    <p>No events found</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;