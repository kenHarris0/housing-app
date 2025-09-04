import axios from 'axios';

export const authApi = axios.create({
    baseURL:"",
    timeout: 2000
});