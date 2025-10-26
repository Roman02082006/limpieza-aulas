import React, { useState } from "react";
import "./Registro_Usuario.css";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && email && password) {
      setMensaje("✅ Registro exitoso, redirigiendo...");
      setTimeout(() => navigate("/pagina_usuario"), 1000);
    } else {
      setMensaje("❌ Completa todos los campos");
    }
  };

  return (
    <div className="registro-container">
      {/* Partículas decorativas */}
      {[...Array(20)].map((_, i) => (
        <span key={i} className="particle" />
      ))}

      <form onSubmit={handleSubmit} className="registro-form">
        <h2 className="titulo">Registro de Usuario</h2>

        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn-principal">
          Registrarse
        </button>

        <div className="linea-o">O registrarse con</div>

        <div className="social-buttons">
          <button type="button" className="google">
            <FaGoogle />
          </button>
          <button type="button" className="facebook">
            <FaFacebookF />
          </button>
          <button type="button" className="instagram">
            <FaInstagram />
          </button>
        </div>

        <button
          type="button"
          onClick={() => navigate("/login-usuario")}
          className="btn-volver"
        >
          Volver al Login
        </button>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </form>
    </div>
  );
}