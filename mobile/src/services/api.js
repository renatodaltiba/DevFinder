import axios from 'axios';

const api = axios.create({
    //Put your own IP address
    baseURL: 'http://192.168.2.3:3333'
});

export default api;