import axios from "axios";
import { message } from "antd";

const http = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(null, (error) => {
  if (error?.response?.status === 401 || error?.response?.status === 404) {
    message.error(error?.response?.data?.status_message);
  }
  if (error?.response?.data?.errors) {
    message.error(error?.response?.data?.errors[0]);
    return error;
  }

  // message.error('Something went wrong!');
  // return error;
});

export default http;
