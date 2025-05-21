import React from 'react';
import './TaskForm.css'

const TaskForm = ({ title, setTitle, priority, setPriority, addTask={addTask}}) => {
  return (
    <div className="add-task-form">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New Task"
            className="task-input"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="priority-select"
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
          </select>
          <button className="add-button" onClick={addTask}>Add</button>
        </div>

  )
}

export default TaskForm;