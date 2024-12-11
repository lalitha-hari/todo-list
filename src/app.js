// src/app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import WelcomePage from './components/WelcomePage';
import './app.css';  // Optional if you are using app.css for styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* You can place navigation inside specific components, not here globally */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task-list" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
