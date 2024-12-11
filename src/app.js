import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* Placeholder for other pages */}
        <Route path="/todo" element={<div>To-Do List Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;


