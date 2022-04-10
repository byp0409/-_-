import axios from 'axios';

const mock = axios.create({
  baseURL: '/mock',
  timeout: 5000,
});

mock.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
mock.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default mock;
