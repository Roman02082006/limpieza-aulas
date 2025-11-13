import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AltaAula from "./AltaAula";
import ListadoAulas from "./ListadoAulas";
import AltaPersonal from "./AltaPersonal";
import ListadoPersonal from "./ListadoPersonal";
import AltaHorario from "./AltaHorario";
import ListadoHorarios from "./ListadoHorario";

// ✅ Si quieres agregar navegación desde este panel hacia Login o Registro, ya está listo con useNavigate
const PanelAdminUsuario = ({ tipo }) => {
  const navigate = useNavigate(); // ✅ Navegación lista

  const roles = ["preceptores", "porteros", "admin", "regencia"];

  const [data, setData] = useState([
    {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      correo: "juanp@gmail.com",
      telefono: "351-555-5555",
      ubicacion: "Córdoba",
      rol: "Preceptor",
    },
    {
      id: 2,
      nombre: "María",
      apellido: "Gómez",
      correo: "maria@gmail.com",
      telefono: "351-444-4444",
      ubicacion: "Buenos Aires",
      rol: "Portera",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    ubicacion: "",
    rol: "",
  });

  const [editando, setEditando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    setData([...data, { ...form, id: Date.now() }]);
    setForm({
      id: null,
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      ubicacion: "",
      rol: "",
    });
  };

  const editItem = (item) => {
    setForm(item);
    setEditando(true);
  };

  const updateItem = () => {
    setData(data.map((d) => (d.id === form.id ? form : d)));
    setForm({
      id: null,
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      ubicacion: "",
      rol: "",
    });
    setEditando(false);
  };

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="panel-container">
      <h1 className="titulo">Gestión de Limpieza y Personal de Aulas</h1>

      {/* ✅ BOTONES DE NAVEGACIÓN EXTRA */}
      <div className="botones-navegacion">
        <button className="btn btn-volver" onClick={() => navigate("/")}>
          Volver al Inicio
        </button>
        <button className="btn btn-login" onClick={() => navigate("/Login_Usuario")}>
          Ir a Login
        </button>
        <button className="btn btn-registro" onClick={() => navigate("/Registro_Usuario")}>
          Ir a Registro
        </button>
      </div>

      {tipo === "admin" && (
        <>
          <h2 className="subtitulo">Panel Admin</h2>

          <section className="seccion">
            <AltaAula />
            <ListadoAulas />
          </section>

          {roles.map((rol) => (
            <section className="seccion" key={rol}>
              <AltaPersonal tipo={rol} />
              <ListadoPersonal tipo={rol} />
            </section>
          ))}

          <section className="seccion">
            <AltaHorario />
            <ListadoHorarios />
          </section>

          <section className="crud-section">
            <h2 className="subtitulo">CRUD de Personas</h2>

            <table className="tabla">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Correo</th>
                  <th>Teléfono</th>
                  <th>Ubicación</th>
                  <th>Rol</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.nombre}</td>
                    <td>{row.apellido}</td>
                    <td>{row.correo}</td>
                    <td>{row.telefono}</td>
                    <td>{row.ubicacion}</td>
                    <td>{row.rol}</td>
                    <td className="acciones">
                      <button className="btn btn-editar" onClick={() => editItem(row)}>
                        Editar
                      </button>
                      <button className="btn btn-eliminar" onClick={() => deleteItem(row.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="form-container">
              <h3>{editando ? "Editar Persona" : "Agregar Persona"}</h3>

              <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
              <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} />
              <input name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} />
              <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
              <input name="ubicacion" placeholder="Ubicación" value={form.ubicacion} onChange={handleChange} />
              <input name="rol" placeholder="Rol" value={form.rol} onChange={handleChange} />

              {editando ? (
                <button className="btn btn-guardar" onClick={updateItem}>
                  Guardar Cambios
                </button>
              ) : (
                <button className="btn btn-agregar" onClick={addItem}>
                  Agregar
                </button>
              )}
            </div>
          </section>
        </>
      )}

      {tipo === "usuario" && (
        <div className="panel-usuario">
          <h2 className="subtitulo">Panel Usuario Común</h2>
          <ListadoAulas />
          <ListadoHorarios />
        </div>
      )}
    </div>
  );
};

export default PanelAdminUsuario;
