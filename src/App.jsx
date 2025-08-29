import { Routes, Route, useNavigate } from "react-router-dom";
import LoginAdmin from "./Componentes/Login_Admin";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Página Principal</h1>
      <button onClick={() => navigate("/formulario")}>Ir al Formulario</button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formulario" element={<LoginAdmin />} />
    </Routes>
  );
}
