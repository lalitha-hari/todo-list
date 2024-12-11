import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '' });

    const handleAddTask = () => {
        if (newTask.title.trim() === '') return;
        addTask(newTask);
        setNewTask({ title: '', description: '', dueDate: '' }); // Clear the form after adding task
    };

    return (
        <div className="task-card add-task-card">
            <h2>Add New Task</h2>
            <input
                type="text"
                placeholder="Task Title"
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <textarea
                placeholder="Task Description"
                value={newTask.description}
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <input
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
