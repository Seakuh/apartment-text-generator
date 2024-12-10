import axios from "axios";
import { getToken } from "../context/authService";
const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = `${API_URL}/home-finder/user-context`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor, um den Bearer-Token hinzuzufügen
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchUserContext = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/${userId}`);
    return response.data.context;
  } catch (error) {
    const err = error as any;
    console.error(
      "Error fetching user context:",
      err.response?.data || err.message
    );
    throw error;
  }
};

export const updateUserField = async (
  userId: string,
  field: string,
  value: any
) => {
  try {
    const response = await axiosInstance.patch(`/${userId}`, { field, value });
    return response.data.data;
  } catch (error) {
    const err = error as any;
    console.error(
      "Error updating user field:",
      err.response?.data || err.message
    );
    throw error;
  }
};
