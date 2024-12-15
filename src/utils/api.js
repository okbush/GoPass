import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Dynamically use API URL from .env
});

// Fetch events from API
export const fetchEvents = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/event`);
    return response.data.data; // Return only the data array
};


export default api;
