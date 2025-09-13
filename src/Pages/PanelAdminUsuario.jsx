import React from 'react';
import AltaAula from "../components/AltaAula";
import ListadoAulas from "../components/ListadoAulas";
import AltaPersonal from "../components/AltaPersonal";
import ListadoPersonal from "../components/ListadoPersonal";
import AltaHorario from "../components/AltaHorario";
import ListadoHorarios from "../components/ListadoHorarios";

const PanelAdminUsuario = ({ tipo }) => {
  return (
    <div>
      <h1>🧹 Gestión de Limpieza y Personal de Aulas</h1>

      {tipo === "admin" && (
        <div>
          <h2>Panel Admin</h2>
          {/* Aulas */}
          <AltaAula />
          <ListadoAulas />

          {/* Personal */}
          <AltaPersonal tipo="preceptores" />
          <ListadoPersonal tipo="preceptores" />

          <AltaPersonal tipo="porteros" />
          <ListadoPersonal tipo="porteros" />

          <AltaPersonal tipo="admin" />
          <ListadoPersonal tipo="admin" />

          <AltaPersonal tipo="regencia" />
          <ListadoPersonal tipo="regencia" />

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
