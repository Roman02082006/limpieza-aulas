import React from "react";
import { useNavigate } from "react-router-dom";
import "./inicio_admin.css";

const InicioAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="form-box">
        <h1>
          Bienvenido a <br />
          <span>Limpieza De Aulas</span>
        </h1>

        <div className="buttons">
          <button className="btn login-btn" onClick={() => navigate("/Login_Admin")}>
            Login
          </button>
          <button
            className="btn register-btn"
            onClick={() => navigate("/Registro_Admin")}>
            Registro
          </button>
        </div>
      </div>
    </div>
  );
};

export default InicioAdmin;