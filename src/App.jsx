import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { MainPage } from './page';
import { TodoApp } from './page/app';
import { Navbar } from './components/navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/app" element={<TodoApp />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;
