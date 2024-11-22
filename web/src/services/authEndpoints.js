import { api } from "./api";

// Auth endpoints

export const login = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const register = async (user) => {
  const response = await api.post("/auth/register", user);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await api.post("/auth/forgot-password", { email });
  return response.data;
};

export const logout = async (token) => {
  const response = await api.get("/auth/logout", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
