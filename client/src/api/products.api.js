import axios from 'axios';

const productAPIUrl = axios.create({
    baseURL: "http://localhost:8000/products/api/v1/products/"
});

export const getAllProducts = () => productAPIUrl.get('/');
export const getProduct = (productId) => productAPIUrl.get(`/${productId}/`);
export const getTShirt = () => productAPIUrl.get('/?category=t-shirt');
export const getAccesory = () => productAPIUrl.get('/?category=accesory');
export const createProduct = (productData) => productAPIUrl.post('/', productData);
export const deleteProduct = (productId) => productAPIUrl.delete(`/${productId}/`);
export const updateProduct = (productId, productData) => productAPIUrl.put(`/${productId}/`, productData);