import { api } from "./api";

// Message endpoints

export const createMessage = async (message, token) => {
  const response = await api.post("/messages", message, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getMessagesForUser = async (userId, token) => {
  const response = await api.get(`/messages/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const markMessageAsRead = async (messageId, token) => {
  const response = await api.put(`/messages/${messageId}/read`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteMessage = async (messageId, token) => {
  const response = await api.delete(`/messages/${messageId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
