import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import EventDetails from './components/EventDetails';
import './styles/App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/event/:id" element={<EventDetails />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
