import axios from "axios";

export const baseURL = "https://anjali-jobquest-mern.onrender.com/";
const axiosapi = axios.create({
  baseURL,
});
export default axiosapi;
