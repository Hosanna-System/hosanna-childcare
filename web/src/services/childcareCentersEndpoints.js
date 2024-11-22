import { api } from "./api";

// Childcare Center endpoints

export const getAllChildcareCenters = async (token) => {
  const response = await api.get("/childcare-centers", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getChildcareCenterById = async (id, token) => {
  const response = await api.get(`/childcare-centers/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createChildcareCenter = async (center, token) => {
  const response = await api.post("/childcare-centers", center, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateChildcareCenter = async (id, center, token) => {
  const response = await api.put(`/childcare-centers/${id}`, center, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteChildcareCenter = async (id, token) => {
  const response = await api.delete(`/childcare-centers/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
