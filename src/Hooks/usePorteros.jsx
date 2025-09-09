import { query, orderBy, collection, getDocs } from "firebase/firestore";

const col = collection(db, "porteros");
const snap = await getDocs (col);
const data = snap.docs.map (d=> ({id: d.id, ...d.data()}));
console.log(data);
//crea coleccion y leo ducumentos 

const col1 = collection(db, "porteros");
const q = query(co, orderBy,("apellido", "asc"))
const snapq1 = await getDocs(q);
const snapg1 = await getDocs (col);
const data1 = snap.docs.map (d=> ({id: d.id, ...d.data()}));
console.log(data);

const col2 = collection(db, "porteros");
const q2 = query(co, orderBy,("nombre", "asc"))
const snapq2 = await getDocs(q2);
const snapg2 = await getDocs (col2);
const data2 = snap.docs.map (d=> ({id: d.id, ...d.data()}));
console.log(data);

const col3 = collection(db, "porteros");
const q3 = query(co, orderBy,("dni", "asc"))
const snapq3 = await getDocs(q3);
const snapg3 = await getDocs (col3);
const data3 = snap.docs.map (d=> ({id: d.id, ...d.data()}));
console.log(data);

const col4 = collection(db, "porteros");
const q4 = query(co, orderBy,("telefono", "asc"))
const snapq4 = await getDocs(q4);
const snapg4 = await getDocs (col4);
const data4 = snap.docs.map (d=> ({id: d.id, ...d.data()}));
console.log(data);

const col5 = collection(db, "porteros");
const q5 = query(co, orderBy,("instituciones", "asc"))
const snapq5 = await getDocs(q5);
const snapg5 = await getDocs (col5);
const data5 = snap.docs.map (d=> ({id: d.id, ...d.data()}));
console.log(data);