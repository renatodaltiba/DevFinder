import axios from 'axios';

const api = axios.create({
    //Put your own IP address
    baseURL: 'SEU IP AQUI'
});

export default api;
