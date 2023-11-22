import axios, { AxiosError } from "axios";
import { getToken } from "../functions/TokenManager";

const BASE_URL = process.env.REACT_APP_PUBLIC_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = getToken();

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default instance;
