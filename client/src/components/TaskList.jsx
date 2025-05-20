import './TaskList.css';

const TaskList = ({
  tasks,
  isLoading,
  editTaskId,
  editTitle,
  setEditTitle,
  editPriority,
  setEditPriority,
  startEdit,
  cancelEdit,
  saveEdit,
  deleteTask,
  toggleCompleted,
  getPriorityClass,
  getPriorityLabel,
  darkMode
}) => {

  if (isLoading) return <div className="loading">Loading...</div>;

  if (tasks.length === 0) return <div className="no-tasks">No tasks. Add a new task!</div>;
  return (
    <div className='tasks-list'>
      {tasks.map(task => (
      <div key={task.id} className={`task-item ${getPriorityClass(task.priority)}`}>
        {editTaskId === task.id ? (
          <div className="edit-form">
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="task-input"
            />
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
              className="priority-select"
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
            <div className="button-group">
              <button className="save-button" onClick={saveEdit}>Save</button>
              <button className="cancel-button" onClick={cancelEdit}>Cancel</button>
            </div>
          </div>
        ) : (
          <div className="task-content">
            <div className="task-info">
              <span 
                className={`completion-status ${task.completed ? 'completed' : 'pending'}`}
                onClick={() => toggleCompleted(task.id, task.completed)}
              >
                {task.completed ? '✓' : ''}
              </span>
              <div className={`task-text ${task.completed ? 'completed-text' : ''}`}>
                <div className="task-title">{task.title}</div>
                <div className="task-priority">
                  Priority: {getPriorityLabel(task.priority)}
                </div>
              </div>
            </div>
            <div className="task-actions">
              <button className="edit-button" onClick={() => startEdit(task)}>
              <img 
                src={darkMode ? '/icons/pencil1.png' : '/icons/pencil2.png'} 
                alt="Toogle Theme"
                className='icon'
              />
              </button>
              <button className="delete-button" onClick={() => deleteTask(task.id)}>
                <img src='/icons/trash.png' alt='Delete button' className='icon icon-delete'/>
              </button>
            </div>
          </div>
        )}
      </div>
    ))}
    </div>

  )
}

export default TaskList;