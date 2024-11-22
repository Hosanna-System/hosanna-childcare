import { api } from "./api";

// Feedback endpoints

export const getAllFeedbacks = async (token) => {
  const response = await api.get("/feedbacks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getFeedbackById = async (id, token) => {
  const response = await api.get(`/feedbacks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createFeedback = async (feedback, token) => {
  const response = await api.post("/feedbacks", feedback, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateFeedback = async (id, feedback, token) => {
  const response = await api.put(`/feedbacks/${id}`, feedback, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteFeedback = async (id, token) => {
  const response = await api.delete(`/feedbacks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
