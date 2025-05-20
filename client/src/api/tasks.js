import axios from 'axios';
import { API_URL } from '../utils/constans';

export const fetchTasks = () => axios.get(`${API_URL}/tasks`);
export const addTask = (task) => axios.post(`${API_URL}/tasks`, task);
export const updateTask = (id, updates) => axios.put(`${API_URL}/tasks/${id}`, updates);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
