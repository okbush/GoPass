import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import EventDetails from './components/EventDetails';
import Profile from './pages/Profile'; // Import the Profile component

import { fetchEvents } from './utils/api'; // Import the fetchEvents function
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider

function App() {
    const [events, setEvents] = useState([]); // State to hold events
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error state

    useEffect(() => {
        const loadEvents = async () => {
            const { data, error } = await fetchEvents(); // Fetch events from API
            if (error) {
                setError(error); // Set error message if fetching fails
            } else {
                setEvents(data); // Set events in state
            }
            setLoading(false); // Set loading to false after fetching
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
        <AuthProvider> {/* Wrap your application with AuthProvider */}
            <Router>
                <div className="app-container">
                    <NavBar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Dashboard events={events} />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/events/:id" element={<EventDetails events={events} />} />
                            <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;