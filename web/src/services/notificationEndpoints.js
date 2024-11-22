import { api } from "./api";

// Notification endpoints

export const createNotification = async (notification, token) => {
  const response = await api.post("/notifications", notification, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getNotificationsByUser = async (userId, token) => {
  const response = await api.get(`/notifications/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const markAsRead = async (id, token) => {
  const response = await api.put(`/notifications/${id}/read`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteNotification = async (id, token) => {
  const response = await api.delete(`/notifications/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
