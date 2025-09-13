import AltaAula from "../components/AltaAula";
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