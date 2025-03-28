import axios from "axios";

const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_SERVER_LINK
});


const useAxiosCommon = () => {
    return axiosPublic;
};

export default useAxiosCommon;