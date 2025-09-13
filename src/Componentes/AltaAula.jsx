import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function AltaAula() {
  const [nombre, setNombre] = useState("");
  const [responsable, setResponsable] = useState("");
  const [estado, setEstado] = useState("Pendiente");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !responsable) return;
    await addDoc(collection(db, "aulas"), { nombre, responsable, estado });
    setNombre("");
    setResponsable("");
    setEstado("Pendiente");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Nueva Aula</h2>
      <input placeholder="Nombre Aula" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Responsable" value={responsable} onChange={e => setResponsable(e.target.value)} />
      <select value={estado} onChange={e => setEstado(e.target.value)}>
        <option value="Pendiente">Pendiente</option>
        <option value="En proceso">En proceso</option>
        <option value="Completado">Completado</option>
      </select>
      <button type="submit">Agregar Aula</button>
    </form>
  );
}