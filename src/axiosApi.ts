import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://http://api.tvmaze.com/search',
});

export default axiosApi;