import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => navigate('/')}>
        ToDoList
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item" onClick={() => navigate('/')}>Home</li>
        <li className="navbar__item" onClick={() => navigate('/app')}>App</li>
      </ul>
    </nav>
  );
};