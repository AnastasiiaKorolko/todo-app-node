import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './src/App';
import axios from 'axios';

jest.mock('./src/utils/constans.js', () => ({
  API_URL: 'http://localhost:5000',
  PRIORITIES: {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  },
  PRIORITY_LABELS: {
    low: 'Low',
    normal: 'Medium',
    high: 'High'
  },
  PRIORITY_CLASSES: {
    low: 'low-priority',
    normal: 'normal-priority',
    high: 'high-priority'
  },
  ERROR_MESSAGES: {
    LOAD_TASKS_ERROR: 'Failed to load tasks',
    ADD_TASK_ERROR: 'Failed to add task',
    UPDATE_TASK_ERROR: 'Failed to update task',
    DELETE_TASK_ERROR: 'Failed to delete task',
    EDIT_TASK_ERROR: 'Failed to edit task',
    EMPTY_TITLE_ERROR: 'Task title cannot be empty'
  },
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark'
  },
  DEFAULT_THEME: 'light',
  DEFAULT_PRIORITY: 'normal'
}));

// Mock axios
jest.mock('axios');

describe('Task Manager App', () => {
  beforeEach(() => {
    
    jest.clearAllMocks();
    
    axios.get.mockResolvedValue({
      data: []
    });
    
    axios.post.mockResolvedValue({
      data: {
        id: '1',
        title: 'New task',
        priority: 'normal',
        completed: false
      }
    });
  });

  test('add a task and see it in the list', async () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('New Task');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(addButton);
    
    const task = await screen.findByText('New task');
    expect(task).toBeInTheDocument();
  });
  
  test('displays error message when API call fails', async () => {
    axios.post.mockRejectedValue(new Error('Network Error'));
    
    render(<App />);
    
    const input = screen.getByPlaceholderText('New Task');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(addButton);
 
    const errorMessage = await screen.findByText('Failed to add task');
    expect(errorMessage).toBeInTheDocument();
  });
});