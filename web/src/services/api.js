import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const getUsers = async (token) => {
  const response = await api.get("/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default api;
