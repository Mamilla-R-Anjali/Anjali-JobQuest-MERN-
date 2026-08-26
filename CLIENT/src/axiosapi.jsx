import axios from "axios";

export const baseURL =
  "https://anjali-jobquest-mern-l8h7.onrender.com";

const axiosapi = axios.create({
  baseURL,
});

export default axiosapi;
