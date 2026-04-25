import axios from 'axios';
import { ShoppingShort, ShoppingShortCreate } from '@/pages/shorts';

const BACKEND_URL =  import.meta.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const shortsApi = {
  // Get all shorts
  getAll: async (): Promise<ShoppingShort[]> => {
    const response = await axios.get(`${API}/shorts`);
    return response.data;
  },

  // Get single short by ID
  getById: async (id: string): Promise<ShoppingShort> => {
    const response = await axios.get(`${API}/shorts/${id}`);
    return response.data;
  },

  // Create new short
  create: async (data: ShoppingShortCreate): Promise<ShoppingShort> => {
    const response = await axios.post(`${API}/shorts`, data);
    return response.data;
  },

  // Update short
  update: async (id: string, data: Partial<ShoppingShortCreate>): Promise<ShoppingShort> => {
    const response = await axios.put(`${API}/shorts/${id}`, data);
    return response.data;
  },

  // Delete short
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API}/shorts/${id}`);
  },

  // Toggle like
  toggleLike: async (id: string): Promise<ShoppingShort> => {
    const response = await axios.post(`${API}/shorts/${id}/like`);
    return response.data;
  }
};