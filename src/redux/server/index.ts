import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string
});

// instance.interceptors.request.use((request) => {
//     request.headers.set('x-auth-token', getCurentJWT());
//     request.headers.set('api-lang', getLang());
//     return request;
//   });

export default instance;