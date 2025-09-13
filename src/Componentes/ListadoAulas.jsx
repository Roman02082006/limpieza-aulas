import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export default function ListadoAulas() {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, "aulas"));
      const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAulas(docs);
    };
    obtenerDatos();
  }, []);

  const actualizarEstado = async (id, nuevoEstado) => {
    const aulaRef = doc(db, "aulas", id);
    await updateDoc(aulaRef, { estado: nuevoEstado });
    setAulas(aulas.map(a => a.id === id ? { ...a, estado: nuevoEstado } : a));
  };

  const eliminarAula = async (id) => {
    await deleteDoc(doc(db, "aulas", id));
    setAulas(aulas.filter(a => a.id !== id));
  };

  return (
    <div>
      <h2> Listado de Aulas</h2>
      <ul>
        {aulas.map(a => (
          <li key={a.id}>
            {a.nombre} - Responsable: {a.responsable} - Estado: 
            <select value={a.estado} onChange={(e) => actualizarEstado(a.id, e.target.value)}>
              <option value="Pendiente">Pendiente</option>
              <option value="En proceso">En proceso</option>
              <option value="Completado">Completado</option>
            </select>
             <button onClick={() => eliminarAula(a.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
