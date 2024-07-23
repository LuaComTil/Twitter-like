import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // !!! CHANGE TO authToken, so it'll work with localstorage and auth requisitions, but the back Will need to accept tokens in all requets !!!
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
