import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EventDetails from './components/EventDetails';
import events from './utils/api'; // Import event data

function App() {
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
