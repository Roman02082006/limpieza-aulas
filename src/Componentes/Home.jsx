/*import AltaAula from "../components/AltaAula";
import ListadoAulas from "../components/ListadoAulas";
import AltaPersonal from "../components/AltaPersonal";
import ListadoPersonal from "../components/ListadoPersonal";
import AltaHorario from "../components/AltaHorario";
import ListadoHorarios from "../components/ListadoHorarios";

export default function Home() {
  return (
    <div>
      <h1>Gestión de Limpieza y Personal de Aulas</h1>

      <AltaAula />
      <ListadoAulas />

      <AltaPersonal tipo="preceptores" />
      <ListadoPersonal tipo="preceptores" />

      <AltaPersonal tipo="porteros" />
      <ListadoPersonal tipo="porteros" />

      <AltaPersonal tipo="admin" />
      <ListadoPersonal tipo="admin" />

      <AltaPersonal tipo="regencia" />
      <ListadoPersonal tipo="regencia" />

      <AltaHorario />
      <ListadoHorarios />
    </div>
  );
}
*/
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Selecciona el tipo de usuario</h1>

      {/* ADMIN */}
      <button onClick={() => navigate("/Panel_Admin")}>
        Entrar como Admin
      </button>

      {/* USUARIO */}
      <button onClick={() => navigate("/Panel_Usuario")}>
        Entrar como Usuario
      </button>
    </div>
  );
}
