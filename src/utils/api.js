import axios from 'axios';

// Create an Axios instance with base configuration
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Dynamically use API URL from .env
});

export default api;
