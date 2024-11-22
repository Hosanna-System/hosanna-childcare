import { api } from "./api";

// Children endpoints

export const getAllChildren = async (token) => {
  const response = await api.get("/children", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getChildById = async (id, token) => {
  const response = await api.get(`/children/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createChild = async (child, token) => {
  const response = await api.post("/children", child, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateChild = async (id, child, token) => {
  const response = await api.put(`/children/${id}`, child, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteChild = async (id, token) => {
  const response = await api.delete(`/children/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
