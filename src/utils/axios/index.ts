import axios, { AxiosError } from "axios";

const BASE_URL = process.env.REACT_APP_PUBLIC_BASE_URL;

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

instance.interceptors.request.use(
    async function (config) {
        const accessToken = localStorage.getItem("access_token");

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
    (response) => response,
    async (error: AxiosError<AxiosError>) => {
        if (axios.isAxiosError(error) && error.response) {
            if (
                error.response.data.message === "Invalid Token" ||
                error.response.data.message === "Token Expired" ||
                error.response.data.status === 401
            ) {
                localStorage.removeItem("access_token");
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
