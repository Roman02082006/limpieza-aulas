import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import RegistroAdmin from "./Componentes/Registro_Admin";
import RegistroUsuario from "./Componentes/Registro_Usuario";
import LoginAdmin from "./Componentes/Login_Admin";
import LoginUsuario from "./Componentes/Login_Usuario";
import PaginaUsuario from "./Componentes/Pagina_Usuario";
import InicioUsuario from "./Componentes/Inicio_Usuario";

// ✅ Nuevo: Importamos el panel
import PanelAdminUsuario from "./Pages/PanelAdminUsuario.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenido</h1>
      <button onClick={() => navigate("/registro-admin")}>Registro Admin</button>
      <button style={{ marginLeft: "20px" }} onClick={() => navigate("/registro-usuario")}>
        Registro Usuario
      </button>
      <button style={{ marginLeft: "20px" }} onClick={() => navigate("/inicio_usuario")}>
        Inicio Usuario
      </button>

      {/* ✅ Nuevo acceso al panel de gestión */}
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => navigate("/panel-admin-usuario")}
      >
        Panel Gestión
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

        {/* ✅ Nuevo: Ruta del Panel con tipo por defecto "admin" */}
        <Route
          path="/panel-admin-usuario"
          element={<PanelAdminUsuario tipo="admin" />}
        />
      </Routes>
    </Router>
  );
}
