import { api } from "./api";

// Schedule endpoints

export const getSchedules = async (token) => {
  const response = await api.get("/schedules", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getScheduleById = async (id, token) => {
  const response = await api.get(`/schedules/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createSchedule = async (schedule, token) => {
  const response = await api.post("/schedules", schedule, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSchedule = async (id, schedule, token) => {
  const response = await api.put(`/schedules/${id}`, schedule, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteSchedule = async (id, token) => {
  const response = await api.delete(`/schedules/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
