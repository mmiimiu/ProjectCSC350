import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../main-page.css';

export const MainPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/app');
  };
  return (
    <div className="main-page">
      <div className="main-page__content">
        <div>
          <h1>TODO APP by Watinee</h1>
          <p>Welcome you can create, update, and delete your todos.</p>
          <p>Enjoy!</p>
        </div>
        <div>
          <button onClick={handleGetStarted}>Let's go!</button>
        </div>
      </div>
    </div>
  );
};
