import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function ListadoHorarios() {
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "horarios"));
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHorarios(docs);
    };
    obtenerDatos();
  }, []);

  const eliminar = async (id) => {
    await deleteDoc(doc(db, "horarios", id));
    setHorarios(horarios.filter(h => h.id !== id));
  };

  return (
    <div>
      <h2>Listado de Horarios</h2>
      <ul>
        {horarios.map(h => (
          <li key={h.id}>
            {h.aula} - Responsable: {h.responsable} - {h.horaInicio} a {h.horaFin}
            <button onClick={() => eliminar(h.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
