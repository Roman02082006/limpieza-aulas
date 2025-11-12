import React, { useState } from "react";
import "./Login_Usuario.css";
import { useNavigate } from "react-router-dom";

export default function LoginUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const mockUser = { email: "demo@ejemplo.com", password: "1234" };

    if (email === mockUser.email && password === mockUser.password) {
      setMensaje("✅ Login exitoso, ¡bienvenido!");
      setTimeout(() => navigate("/pagina_usuario"), 1000);
    } else {
      setMensaje("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
      
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

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

        <button type="submit">Entrar</button>

        <button type="button" onClick={() => navigate("/registro-usuario")}>
          Ir a Registro
        </button>

       
        {mensaje && (
          <p
            className={`mt-3 text-center ${
              mensaje.includes("✅") ? "text-green-400" : "text-red-400"
            }`}
          >
            {mensaje}
          </p>
        )}
      </form>
    </div>
  );
}