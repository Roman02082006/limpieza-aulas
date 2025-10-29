import { useNavigate } from "react-router-dom";
import "./Registro_Admin.css";

export default function RegistroAdmin() {
  const navigate = useNavigate();

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
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

