import React from 'react';
import { useEffect, useState } from 'react';
import { getPriorityLabel, getPriorityClass } from './utils/helpers';
import {
  fetchTasks,
  addTask as addTaskApi,
  updateTask,
  deleteTask as deleteTaskApi
} from './api/tasks';

import {
  API_URL,
  ERROR_MESSAGES,
  DEFAULT_PRIORITY,
  DEFAULT_THEME,
} from './utils/constans';

import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState(DEFAULT_PRIORITY || 'normal');
  const [darkMode, setDarkMode] = useState(DEFAULT_THEME || 'dark');

  const [editTaskId, setEditTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editPriority, setEditPriority] = useState('normal');
  const [completed, setCompleted] = useState(false)

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetchTasks();
      setTasks(res.data);
    } catch (error) {
      handleError(error, ERROR_MESSAGES.LOAD_TASKS_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;

    setError(null);

    try {
      const res = await addTaskApi( { title, priority });
      setTasks(prev => [...prev, res.data]);
      setTitle('');
    } catch (error) {
      handleError(error, ERROR_MESSAGES.ADD_TASK_ERROR);
    }
  };

  const toggleCompleted = async (id, currentStatus) => {
    try {
      const res = await updateTask(id, {
        completed: !currentStatus
      });
      setTasks(prev =>
        prev.map(task => task.id === id ? res.data : task)
      );
    } catch (error) {
      handleError(error, ERROR_MESSAGES.UPDATE_TASK_ERROR);
    }
  };

  const deleteTask = async (id) => {
    setError(null);

    try {
      await deleteTaskApi(id);
      setTasks(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      handleError(error, ERROR_MESSAGES.DELETE_TASK_ERROR);
    }
  };

  const handleError = (error, message) => {
    console.error(message, error);
    setError(message);
  };

  const startEdit = (task) => {
    setEditTaskId(task.id);
    setEditTitle(task.title);
    setEditPriority(task.priority);
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTitle('');
    setEditPriority(DEFAULT_PRIORITY);
  };

  const saveEdit = async () => {
    if (!editTitle.trim()) {
      setError(ERROR_MESSAGES.EMPTY_TITLE_ERROR);
      return;
    }

    try {
      const res = await updateTask(editTaskId, {
        title: editTitle,
        priority: editPriority,
        completed: !completed
      });

      setTasks(prev =>
        prev.map(task => task.id === editTaskId ? res.data : task)
      );
      cancelEdit();
    } catch (error) {
      handleError(error, 'Failed to edit task');
    }
  };
  
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        {error && <div className="error-message">{error}</div>}

        <TaskForm
        tasks={tasks} 
          title={title} 
          setTitle={setTitle}
          priority={priority}
          setPriority={setPriority}
          addTask={addTask}
        />

        <TaskList 
          tasks={tasks}
          isLoading={isLoading}
          editTaskId={editTaskId}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editPriority={editPriority}
          setEditPriority={setEditPriority}
          startEdit={startEdit}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
          getPriorityClass={getPriorityClass}
          getPriorityLabel={getPriorityLabel}
          darkMode={darkMode}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted} 
        />
      </div>
    </div>
  );
}

export default App;
