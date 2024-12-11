import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AddTask from './AddTask'; // Import the AddTask component

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [currentView, setCurrentView] = useState('viewTask'); // Set initial view to "View Task"
    const [showAddTaskForm, setShowAddTaskForm] = useState(false); // Track visibility of Add Task form

    // Add a new task
    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    // Toggle completed status of task
    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Filter tasks based on their completion status
    const pendingTasks = tasks.filter(task => !task.completed);
    const completedTasks = tasks.filter(task => task.completed);

    return (
        <div className="todo-container">
            <h1 className="todo-title">TODO List</h1>

            {/* Option buttons */}
            <div className="option-buttons">
                <Link to="/"><button>Home</button></Link> {/* Home Button */}
                <Link to="/add-task"><button>Add Task</button></Link> {/* Link to Add Task page */}
                <button onClick={() => setCurrentView('pendingTasks')}>Pending Tasks</button>
                <button onClick={() => setCurrentView('completedTasks')}>Completed Tasks</button>
            </div>

            {/* Conditional rendering of Add Task form */}
            {currentView === 'addTask' && <AddTask addTask={addTask} />}

            {/* Conditional rendering of views */}
            {currentView === 'viewTask' && (
                <div className="task-list">
                    {tasks.map(task => (
                        <div key={task.id} className="task-card">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            {task.dueDate && <p>Due: {task.dueDate}</p>}
                            <button onClick={() => toggleTaskCompletion(task.id)}>
                                {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {currentView === 'pendingTasks' && (
                <div className="task-list">
                    {pendingTasks.map(task => (
                        <div key={task.id} className="task-card">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            {task.dueDate && <p>Due: {task.dueDate}</p>}
                            <button onClick={() => toggleTaskCompletion(task.id)}>
                                Mark as Completed
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {currentView === 'completedTasks' && (
                <div className="task-list">
                    {completedTasks.map(task => (
                        <div key={task.id} className="task-card">
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                            {task.dueDate && <p>Due: {task.dueDate}</p>}
                            <button onClick={() => toggleTaskCompletion(task.id)}>
                                Mark as Pending
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TodoApp;
