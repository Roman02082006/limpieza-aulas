import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';


import LoginAdmin from './Componentes/Login_Admin.js';
import LoginUser from './Componentes/Login_Usuario.js';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      
      <button className="button-classroom" onClick={() => navigate('src/Login_Admin.js')}>
        <div className="logo-wrapper">
          <svg className="classroom-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="100%" height="100%" rx="4" fill="#1a73e8"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
            <rect x="6" y="15" width="12" height="2" fill="white"/>
          </svg>
          <svg className="crown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path fill="gold" d="M8 24L24 8l8 16 8-16 16 16-8 24H16z"/>
          </svg>
        </div>
      </button>

      {/* Botón Usuario */}
      <button className="button-classroom" onClick={() => navigate("src/Login_Usuario.js")}>
        <div className="logo-wrapper">
          <svg className="classroom-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="100%" height="100%" rx="4" fill="#1a73e8"/>
            <circle cx="12" cy="10" r="3" fill="white"/>
            <rect x="6" y="15" width="12" height="2" fill="white"/>
          </svg>
        </div>
      </button>
    </div>
  );
};

// Componente principal con rutas
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-user" element={<LoginUser />} />
      </Routes>
    </Router>
  );
};

export default App;