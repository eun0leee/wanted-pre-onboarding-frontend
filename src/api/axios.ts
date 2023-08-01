import axios, { AxiosError } from 'axios';

const config = {
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
};

export const defaultInstance = axios.create(config);

defaultInstance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error),
);

defaultInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return error.response;
  },
);

export const authInstance = axios.create(config);

authInstance.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = 'Bearer access_token';
    return config;
  },
  (error) => Promise.reject(error),
);

authInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    return error.response.data;
  },
);
