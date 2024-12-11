// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              {task.dueDate && <p>Due: {task.dueDate}</p>}
              <button onClick={() => toggleTaskCompletion(task.id)}>
                {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
