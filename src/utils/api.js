import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Dynamically use API URL from .env
});

// Fetch events from API
export const fetchEvents = async () => {
    try {
        const response = await api.get('/api/event'); // Fetches events from the backend
        console.log('API response:', response.data); // Log the API response
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};

export default api;
