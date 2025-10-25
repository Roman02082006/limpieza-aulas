import React, { useState } from "react";
import "./Registro_Usuario.css";
import { useNavigate } from "react-router-dom";

export default function RegistroUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar usuario simulado (solo demostrativo)
    if (nombre && email && password) {
      setMensaje("✅ Registro exitoso, redirigiendo...");
      setTimeout(() => navigate("/pagina_usuario"), 1000);
    } else {
      setMensaje("❌ Completa todos los campos");
    }
  };

  return (
    <div className="registro-container">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Registro Usuario</h2>

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
        >
          Registrarse
        </button>

        <button
          type="button"
          onClick={() => navigate("/login-usuario")}
          className="w-full bg-blue-500 text-white p-2 mt-3 rounded-lg hover:bg-blue-600"
        >
          Volver al Login
        </button>
      </form>

      {mensaje && <p className="mt-4 text-lg font-medium">{mensaje}</p>}
    </div>
  );
}