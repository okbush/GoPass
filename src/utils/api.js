import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Dynamically use API URL from .env
});


// Fetch events from API
export const fetchEvents = async () => {
    try {
        const response = await api.get('/events'); // Fetches events from the backend
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export default api;
