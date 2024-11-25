import { api } from "./api";


export const getAllServices = async () => {
    try {
        const response = await api.get("/services");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getServiceById = async (id) => {
    try {
        const response = await api.get(`/services/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createService = async (serviceData) => {
    try {
        const response = await api.post("/services", serviceData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateService = async (id, serviceData) => {
    try {
        const response = await api.put(`/services/${id}`, serviceData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteService = async (id) => {
    try {
        const response = await api.delete(`/services/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};