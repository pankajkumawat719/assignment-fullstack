import axios from "axios";

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Update with your backend URL if deployed
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
