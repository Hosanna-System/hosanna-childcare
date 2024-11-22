import { api } from "./api";

// Document endpoints

export const getAllDocuments = async (token) => {
  const response = await api.get("/documents", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getDocumentById = async (id, token) => {
  const response = await api.get(`/documents/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createDocument = async (document, token) => {
  const response = await api.post("/documents", document, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateDocumentById = async (id, document, token) => {
  const response = await api.put(`/documents/${id}`, document, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteDocumentById = async (id, token) => {
  const response = await api.delete(`/documents/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
