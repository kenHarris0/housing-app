import axios from 'axios'

const hoteApi = axios.create({
    baseURL: "http://localhost:8080/hotel",
    timeout: 2000
});

export default hoteApi;