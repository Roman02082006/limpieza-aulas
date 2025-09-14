import React from "react";
import AltaAula from "../Componentes/AltaAula";
import ListadoAulas from "../Componentes/ListadoAulas";
import AltaPersonal from "../Componentes/AltaPersonal";
import ListadoPersonal from "../Componentes/ListadoPersonal";
import AltaHorario from "../Componentes/AltaHorario";
import ListadoHorarios from "../Componentes/ListadoHorario";

const PanelAdminUsuario = ({ tipo }) => {
  const roles = ["preceptores", "porteros", "admin", "regencia"];

  return (
    <div>
      <h1>Gestión de Limpieza y Personal de Aulas</h1>

      {tipo === "admin" && (
        <div>
          <h2>Panel Admin</h2>

          {/* Aulas */}
          <AltaAula />
          <ListadoAulas />

          {/* Personal */}
          {roles.map((rol) => (
            <div key={rol}>
              <AltaPersonal tipo={rol} />
              <ListadoPersonal tipo={rol} />
            </div>
          ))}

          {/* Horarios */}
          <AltaHorario />
          <ListadoHorarios />
        </div>
      )}

      {tipo === "usuario" && (
        <div>
          <h2>Panel Usuario Común</h2>
          <ListadoAulas />
          <ListadoHorarios />
        </div>
      )}
    </div>
  );
};

export default PanelAdminUsuario;
