import axios from "axios";

export const baseURL =
  "https://anjali-jobquest-mern-production.up.railway.app";

const axiosapi = axios.create({
  baseURL,
});

export default axiosapi;