import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import RegistroAdmin from "./Componentes/Registro_Admin";
import RegistroUsuario from "./Componentes/Registro_Usuario";
import LoginAdmin from "./Componentes/Login_Admin";
import LoginUsuario from "./Componentes/Login_Usuario";
import PaginaUsuario from "./Componentes/Página_Usuario";
import InicioUsuario from "./Componentes/Inicio_Usuario"; 

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido</h1>
      <button onClick={() => navigate("/registro-admin")}>Registro Admin</button>
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => navigate("/registro-usuario")}
      >
        Registro Usuario
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio_usuario" element={<InicioUsuario />} /> 
        <Route path="/registro-admin" element={<RegistroAdmin />} />
        <Route path="/registro-usuario" element={<RegistroUsuario />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login-usuario" element={<LoginUsuario />} />
        <Route path="/pagina_usuario" element={<PaginaUsuario />} /> 
      </Routes>
    </Router>
  );
}