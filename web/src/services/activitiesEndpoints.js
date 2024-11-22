import { api } from "./api";

// Activity endpoints

export const getActivities = async (token) => {
  const response = await api.get("/activities", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getActivityById = async (id, token) => {
  const response = await api.get(`/activities/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createActivity = async (activity, token) => {
  const response = await api.post("/activities", activity, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateActivity = async (id, activity, token) => {
  const response = await api.put(`/activities/${id}`, activity, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteActivity = async (id, token) => {
  const response = await api.delete(`/activities/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
