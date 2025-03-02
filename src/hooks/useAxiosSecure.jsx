import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER_LINK,
    withCredentials: true
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;