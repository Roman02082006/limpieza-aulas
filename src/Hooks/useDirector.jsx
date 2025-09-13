import { query, orderBy, collection, getDocs } from "firebase/firestore";

const c= collection(db, "directores");
const q = query(col,orderBy("apellido", "asc"));
const s= await getDocs(col);
const d= snap.docs.map(d => ({ id: d.id, ...d.data()}));
console.log(data);

const co= collection(db, "directores");
const qu = query(col,orderBy("apellido", "desc"));
const sn= await getDocs(col);
const da= snap.docs.map(d => ({ id: d.id, ...d.data()}));
console.log(data);

const col= collection(db, "directores");
const que = query(col,orderBy("nombre", "asc"));
const sna= await getDocs(col);
const dat= snap.docs.map(d => ({ id: d.id, ...d.data()}));
console.log(data);

const coll= collection(db, "directores");
const quer = query(col,orderBy("nombre", "desc"));
const snap= await getDocs(col);
const data= snap.docs.map(d => ({ id: d.id, ...d.data()}));
console.log(data);

const colle= collection(db, "directores");
const query= query(col,orderBy("dni", "asc"));
const snapp= await getDocs(col);
const dataa= snap.docs.map(d => ({ id: d.id, ...d.data()}));
console.log(data);

const collec= collection(db, "directores");
const queryy = query(col,orderBy("dni", "desc"));
const snappp= await getDocs(col);
const dataaa= snap.docs.map(d => ({ id: d.id, ...d.data()}));
console.log(data);