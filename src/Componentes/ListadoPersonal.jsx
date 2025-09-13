import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export default function ListadoPersonal({ tipo }) {
  const [personal, setPersonal] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const querySnapshot = await getDocs(collection(db, tipo));
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPersonal(docs);
    };
    obtenerDatos();
  }, [tipo]);

  const eliminar = async (id) => {
    await deleteDoc(doc(db, tipo, id));
    setPersonal(personal.filter(p => p.id !== id));
  };

  return (
    <div>
      <h2>Listado de {tipo}</h2>
      <ul>
        {personal.map(p => (
          <li key={p.id}>
            {p.nombre} - Cargo: {p.cargo}
            <button onClick={() => eliminar(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
