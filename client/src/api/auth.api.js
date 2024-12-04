import axios from 'axios';

const authAPIUrl = axios.create({
    baseURL: "http://localhost:8000/",
});

authAPIUrl.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export const login = (credentials) => authAPIUrl.post("/login/", credentials);



