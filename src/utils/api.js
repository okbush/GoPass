import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Dynamically use API URL from .env
});

// Fetch events from API
export const fetchEvents = async () => {
    try {
        const response = await api.get('/api/event'); // Use the created instance
        return response.data.data; // Return only the data array
    } catch (error) {
        console.error('Error fetching events:', error);
        return []; // Return an empty array on error
    }
};

export default api;