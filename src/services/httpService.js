import axios from 'axios';
import { message } from 'antd';
import { AuthStore } from '@/store';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(config => {
  const auth_token = AuthStore.getState().token;
  if (auth_token) {
    const token = `token ${auth_token}`;
    config.headers.Authorization = token;
  }
  return config;
});

http.interceptors.response.use(null, error => {
  if (error?.response?.status === 401 || error?.response?.status === 404) {
    message.error(error?.response?.data?.status_message);
  }
  if (error?.response?.data?.errors) {
    message.error(error?.response?.data?.errors[0]);
    return error;
  }

  console.log(error?.response);

  message.error('Something went wrong!');
  return error;
});

export default http;
