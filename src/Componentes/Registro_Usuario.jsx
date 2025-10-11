/*import { useNavigate } from "react-router-dom";
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
}*/

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, db } from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./Registro_Usuario.css";

export default function RegistroUsuario() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nombre,
        email,
        rol: "usuario",
      });

      alert("Usuario registrado correctamente ✅");
      navigate("/Panel_Usuario");
    } catch (err) {
      console.error(err);
      setError("Error al registrar usuario.");
    }
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
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
