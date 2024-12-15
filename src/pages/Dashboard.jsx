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
            try {
                const events = await fetchEvents();
                setEventList(events); // Save all events
                setFilteredEvents(events); // Initially show all events
            } catch (error) {
                console.error('Failed to load events:', error);
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
            event.EventName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered);
    };

    // Handle search button click
    const handleSearchClick = () => {
        const filtered = eventList.filter((event) =>
            event.EventName.toLowerCase().includes(searchQuery.toLowerCase())
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
                <button onClick={handleSearchClick}>Search</button>
            </div>
            <div className="event-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                        <EventCard key={event.EventID} event={event} />
                    ))
                ) : (
                    <p>No events found</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
