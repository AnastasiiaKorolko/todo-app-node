const ENV = {
  VITE_API_URL: typeof import.meta !== 'undefined' && import.meta.env 
    ? import.meta.env.VITE_API_URL 
    : (typeof process !== 'undefined' && process.env ? process.env.VITE_API_URL : null),
  
  VITE_DEFAULT_THEME: typeof import.meta !== 'undefined' && import.meta.env 
    ? import.meta.env.VITE_DEFAULT_THEME 
    : (typeof process !== 'undefined' && process.env ? process.env.VITE_DEFAULT_THEME : null)
};

export const API_URL = ENV.VITE_API_URL || 'http://localhost:5000';

export const PRIORITIES = {
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
};

export const PRIORITY_LABELS = {
  [PRIORITIES.LOW]: 'Low',
  [PRIORITIES.NORMAL]: 'Medium',
  [PRIORITIES.HIGH]: 'High'
};

export const PRIORITY_CLASSES = {
  [PRIORITIES.LOW]: 'low-priority',
  [PRIORITIES.NORMAL]: 'normal-priority',
  [PRIORITIES.HIGH]: 'high-priority'
};

export const ERROR_MESSAGES = {
  LOAD_TASKS_ERROR: 'Failed to load tasks',
  ADD_TASK_ERROR: 'Failed to add task',
  UPDATE_TASK_ERROR: 'Failed to update task',
  DELETE_TASK_ERROR: 'Failed to delete task',
  EDIT_TASK_ERROR: 'Failed to edit task',
  EMPTY_TITLE_ERROR: 'Task title cannot be empty'
};

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const DEFAULT_THEME = ENV.VITE_DEFAULT_THEME || THEMES.LIGHT;
export const DEFAULT_PRIORITY = PRIORITIES.NORMAL;
