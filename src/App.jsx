import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EventDetails from './components/EventDetails';
import { fetchEvents } from './utils/api'; // Import the fetchEvents function

function App() {
    const [events, setEvents] = useState([]); // State to hold events
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents(); // Fetch events from API
                setEvents(fetchedEvents); // Set events in state
            } catch (err) {
                setError(err.message); // Set error message if fetching fails
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        loadEvents(); // Call the function to load events
    }, []); // Empty dependency array means this runs once on mount

    if (loading) {
        return <div>Loading events...</div>; // Show loading message
    }

    if (error) {
        return <div>Error fetching events: {error}</div>; // Show error message
    }

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard events={events} />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/events/:id" element={<EventDetails events={events} />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;