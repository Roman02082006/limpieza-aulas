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
      // Espera 1 segundo y redirige al panel principal del usuario
      setTimeout(() => navigate("/pagina_usuario"), 1000);
    } else {
      setMensaje("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>

        
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
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Entrar
        </button>

        
        <button
          type="button"
          onClick={() => navigate("/registro-usuario")}
          className="w-full bg-green-500 text-white p-2 mt-3 rounded-lg hover:bg-green-600"
        >
          Ir a Registro
        </button>
      </form>

      {/* Mensaje de validación */}
      {mensaje && (
        <p
          className={`mt-4 text-lg font-medium text-center ${
            mensaje.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {mensaje}
        </p>
      )}
    </div>
  );
}