import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL as string,
    // withCredentials: true,
});

instance.interceptors.request.use((config) => {
    // config.headers['X-Request-ID'] = newrelic
    // request.headers.set('x-auth-token', getCurentJWT());
    // request.headers.set('api-lang', getLang());
    // config.headers['X-FullStory-URL'] = FullStory.getCurrentSessionURL(true);
    return config;
  });

export default instance;