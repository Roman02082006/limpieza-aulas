import {query, orderBy, collection, getDocs} from "firebase/firestore";

const collect = collection (db, "preceptores");
const qu = query(collect, orderBy ("apellido", "asc"));
const ap = await getDocs (col);
const da = snap1 .doc.map (da=> ({id: da.id, ...da.data()}));
console.log (data);
const snap1 = await getDocs (qu);

const col = collection (db, "preceptores");

const q2 = query(col, orderBy ("nombre", "desc"));
const nap = await getDocs (col);
const dato = snap2 .doc.map (d=> ({id: d.id, ...d.data()}));
console.log (data);
const snap2 = await getDocs (q);


const colec = collection (db, "preceptores");
const quer = query(col, orderBy ("telefono", "desc"));
const sn = await getDocs (col);
const datos = snap .doc.map (d=> ({id: d.id, ...d.data()}));
console.log (data);

const coll = collection (db, "preceptores");
const q = query(col, orderBy ("curso", "asc"));
const snap = await getDocs (col);
const data = snap .doc.map (d=> ({id: d.id, ...d.data()}));
console.log (data);