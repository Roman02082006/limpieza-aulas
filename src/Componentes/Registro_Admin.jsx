import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Registro_Admin.css";

export default function RegistroAdmin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Elimina caracteres especiales del correo
  const handleEmailChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9@.]/g, "");
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registro de administrador exitoso");
    navigate("/PanelAdminUsuario");
  };

  return (
    <div className="registro-container">
      <h2>Registro Administrador</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />

        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
          placeholder="ejemplo@correo.com"
        />

        <label htmlFor="password">Contraseña:</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
