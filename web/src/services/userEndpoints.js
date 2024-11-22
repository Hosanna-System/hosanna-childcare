import { api } from "./api";

// User endpoints

export const getUsers = async (token) => {
  const response = await api.get("/users", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createUser = async (user, token) => {
  const response = await api.post("/users", user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateUser = async (id, user, token) => {
  const response = await api.put(`/users/${id}`, user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteUser = async (id, token) => {
  const response = await api.delete(`/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
