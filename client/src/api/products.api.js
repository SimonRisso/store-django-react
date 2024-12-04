import axios from 'axios';

const privateProductAPIUrl = axios.create({
    baseURL: "http://localhost:8000/products/api/v1/products/"
});

const publicProductAPIUrl = axios.create({
    baseURL: "http://localhost:8000/products/api/v1/products/"
});

// Interceptor para incluir el token
privateProductAPIUrl.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});

export const getAllProducts = () => publicProductAPIUrl.get('/');
export const getProduct = (productId) => publicProductAPIUrl.get(`/${productId}/`);
export const getTShirt = () => publicProductAPIUrl.get('/?category=t-shirt');
export const getAccesory = () => publicProductAPIUrl.get('/?category=accesory');
export const createProduct = (productData) => privateProductAPIUrl.post('/', productData);
export const deleteProduct = (productId) => privateProductAPIUrl.delete(`/${productId}/`);
export const updateProduct = (productId, productData) => privateProductAPIUrl.put(`/${productId}/`, productData);