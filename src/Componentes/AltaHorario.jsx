import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export default function AltaHorario() {
  const [aula, setAula] = useState("");
  const [responsable, setResponsable] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFin, setHoraFin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!aula || !responsable || !horaInicio || !horaFin) return;
    await addDoc(collection(db, "horarios"), { aula, responsable, horaInicio, horaFin });
    setAula(""); setResponsable(""); setHoraInicio(""); setHoraFin("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Horario</h2>
      <input placeholder="Aula" value={aula} onChange={e => setAula(e.target.value)} />
      <input placeholder="Responsable" value={responsable} onChange={e => setResponsable(e.target.value)} />
      <input type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} />
      <input type="time" value={horaFin} onChange={e => setHoraFin(e.target.value)} />
      <button type="submit">Agregar</button>
    </form>
  );
}
