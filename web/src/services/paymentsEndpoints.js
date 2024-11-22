import { api } from "./api";

// Payment endpoints

export const getAllPayments = async (token) => {
  const response = await api.get("/payments", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getPaymentById = async (id, token) => {
  const response = await api.get(`/payments/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createPayment = async (payment, token) => {
  const response = await api.post("/payments", payment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updatePaymentById = async (id, payment, token) => {
  const response = await api.put(`/payments/${id}`, payment, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deletePaymentById = async (id, token) => {
  const response = await api.delete(`/payments/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
