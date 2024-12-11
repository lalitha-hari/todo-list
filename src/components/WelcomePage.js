import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome to To-Do List App</h1>
            <button
                className="proceed-button"
                onClick={() => alert('Proceeding...')}
            >
                Proceed
            </button>
        </div>
    );
};

export default WelcomePage;
