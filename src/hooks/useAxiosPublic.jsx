import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://3xn-server.vercel.app",
  // baseURL: "http://localhost:8080",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
