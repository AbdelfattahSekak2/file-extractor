import axios, { AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.request.use((config) => {
  config.headers = { 
    ...config.headers,
    "X-Inferuser-Token": process.env.REACT_APP_TOKEN,
  };
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default client;
