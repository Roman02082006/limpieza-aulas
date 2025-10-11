import React, { useState } from "react";
import './Login_Admin.css';
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  // Estados para correo y contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate =useNavigate()
  // Función que maneja el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Usuario de prueba (simulación de "archivo de login")
    const mockUser = { email: "demo@ejemplo.com", password: "1234" };

    if (email === mockUser.email && password === mockUser.password) {
      setMensaje("Login exitoso, ¡bienvenido!");
    } else {
      setMensaje("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container-admin">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>

        {/* Campo email */}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        {/* Campo password */}
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Entrar
        </button>

        <button
        type="button"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        onClick={() =>navigate("/PanelAdminUsuario") }>
          Registrar
        </button>
      </form>

      {/* Mensaje de validación */}
      {mensaje && (
        <p className="mt-4 text-lg font-medium">{mensaje}</p>
      )}
    </div>
  );
}
