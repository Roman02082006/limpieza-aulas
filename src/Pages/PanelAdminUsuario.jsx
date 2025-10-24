import React, { useState } from "react";
import AltaAula from "../Componentes/AltaAula";
import ListadoAulas from "../Componentes/ListadoAulas";
import AltaPersonal from "../Componentes/AltaPersonal";
import ListadoPersonal from "../Componentes/ListadoPersonal";
import AltaHorario from "../Componentes/AltaHorario";
import ListadoHorarios from "../Componentes/ListadoHorario";

const PanelAdminUsuario = ({ tipo }) => {
  const roles = ["preceptores", "porteros", "admin", "regencia"];

  const [data, setData] = useState([
    { id: 1, nombre: "Juan", apellido: "Pérez", correo: "juanp@gmail.com", telefono: "351-555-5555", ubicacion: "Córdoba", rol: "Preceptor" },
    { id: 2, nombre: "María", apellido: "Gómez", correo: "maria@gmail.com", telefono: "351-444-4444", ubicacion: "Buenos Aires", rol: "Portera" },
  ]);

  const [form, setForm] = useState({ id: null, nombre: "", apellido: "", correo: "", telefono: "", ubicacion: "", rol: "" });
  const [editando, setEditando] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const addItem = () => {
    setData([...data, { ...form, id: Date.now() }]);
    setForm({ id: null, nombre: "", apellido: "", correo: "", telefono: "", ubicacion: "", rol: "" });
  };

  const editItem = (item) => {
    setForm(item);
    setEditando(true);
  };

  const updateItem = () => {
    setData(data.map((d) => (d.id === form.id ? form : d)));
    setForm({ id: null, nombre: "", apellido: "", correo: "", telefono: "", ubicacion: "", rol: "" });
    setEditando(false);
  };

  const deleteItem = (id) => setData(data.filter((item) => item.id !== id));

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

          
          <h2 style={{ marginTop: "30px" }}>CRUD de Personas</h2>
          <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead style={{ background: "#f4f4f4" }}>
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
                  <td>
                    <button onClick={() => editItem(row)} style={{ marginRight: "5px", background: "orange" }}>Editar</button>
                    <button onClick={() => deleteItem(row.id)} style={{ background: "red", color: "white" }}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Formulario */}
          <div style={{ marginTop: "20px" }}>
            <h3>{editando ? "Editar Persona" : "Agregar Persona"}</h3>
            <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
            <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} />
            <input name="correo" placeholder="Correo" value={form.correo} onChange={handleChange} />
            <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
            <input name="ubicacion" placeholder="Ubicación" value={form.ubicacion} onChange={handleChange} />
            <input name="rol" placeholder="Rol" value={form.rol} onChange={handleChange} />

            {editando ? (
              <button onClick={updateItem} style={{ marginLeft: "10px", background: "green", color: "white" }}>Guardar Cambios</button>
            ) : (
              <button onClick={addItem} style={{ marginLeft: "10px" }}>Agregar</button>
            )}
          </div>
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