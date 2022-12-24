import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-api-cs.onrender.com/weatherforecast/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;