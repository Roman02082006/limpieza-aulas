import { useNavigate } from "react-router-dom";
import "./Registro_Usuario.css";

export default function RegistroUsuario() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registro de usuario exitoso");
    navigate("/Login_Usuario"); // Redirige al login de usuario
  };

  return (
    <div className="registro-container">
      <h2>Registro Usuario</h2>
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
