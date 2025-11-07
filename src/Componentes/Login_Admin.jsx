import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login_Admin.css";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [iconsReady, setIconsReady] = useState(false);
  const navigate = useNavigate();

  // ✅ Cargar Font Awesome correctamente
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);

    // Esperar a que cargue la hoja antes de mostrar los íconos
    link.onload = () => setIconsReady(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockUser = { email: "demo@ejemplo.com", password: "1234" };

    if (email === mockUser.email && password === mockUser.password) {
      setMensaje("✅ Login exitoso, ¡bienvenido!");
      setTimeout(() => navigate("/Panel_Admin"), 1500);
    } else {
      setMensaje("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <h1>Bienvenido</h1>
      <p>Iniciá sesión para mantener tu aula limpia y ordenada</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
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

        <button type="submit">Iniciar sesión</button>
      </form>

      {mensaje && <p className="mensaje-login">{mensaje}</p>}

      <div className="divider">o continuá con</div>

      <div className="social-buttons">
        {iconsReady ? (
          <>
            <button type="button" className="social-btn google">
              <i className="fab fa-google"></i>
            </button>
            <button type="button" className="social-btn facebook">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button type="button" className="social-btn x">
              <i className="fab fa-x-twitter"></i>
            </button>
          </>
        ) : (
          <div className="loading-icons">···</div>
        )}
      </div>

      <button
        type="button"
        className="registrar-btn"
        onClick={() => navigate("/Registro_Admin")}
      >
        ¿No tenés cuenta? Registrate
      </button>
    </div>
  );
}
