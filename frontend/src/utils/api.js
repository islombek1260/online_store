import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.example.com', // Замените на ваш API
});

export default api;