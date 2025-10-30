import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio_admin.css";

const InicioAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="form-box">
        <h1 className="title">
          Bienvenido a <br />
          <span className="highlight">Limpieza de Aulas</span>
        </h1>

        <p className="subtitle">
          Gestioná tus aulas de forma simple, rápida y eficiente.
        </p>

        <div className="buttons">
          <button className="btn login-btn" onClick={() => navigate("/Login_Admin")}>
            Iniciar sesión
          </button>
          <button
            className="btn register-btn"
            onClick={() => navigate("/Registro_Admin")}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default InicioAdmin;
