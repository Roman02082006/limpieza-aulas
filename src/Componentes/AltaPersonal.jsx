import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export default function AltaPersonal({ tipo }) {
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !cargo) return;
    await addDoc(collection(db, tipo), { nombre, cargo });
    setNombre("");
    setCargo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar {tipo}</h2>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Cargo" value={cargo} onChange={e => setCargo(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}
