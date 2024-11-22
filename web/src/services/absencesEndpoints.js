import { api } from "./api";

// Absence endpoints

export const getAllAbsences = async (token) => {
  const response = await api.get("/absences", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getAbsenceById = async (id, token) => {
  const response = await api.get(`/absences/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createAbsence = async (absence, token) => {
  const response = await api.post("/absences", absence, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateAbsence = async (id, absence, token) => {
  const response = await api.put(`/absences/${id}`, absence, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteAbsence = async (id, token) => {
  const response = await api.delete(`/absences/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
