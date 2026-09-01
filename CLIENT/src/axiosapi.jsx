import axios from "axios";

export const baseURL =
  "https://anjali-jobquest-mern-production-0526.up.railway.app"

const axiosapi = axios.create({
  baseURL,
});

export default axiosapi;
