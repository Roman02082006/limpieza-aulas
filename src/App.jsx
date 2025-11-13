import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// 🔹 Importación de componentes
import PrivateRoute from "./Componentes/PrivateRoute";
import Login_Admin from "./Componentes/Login_Admin";
import Login_Usuario from "./Componentes/Login_Usuario";
import Registro_Admin from "./Componentes/Registro_Admin";
import InicioUsuario from "./Componentes/inicio_usuario";
import InicioAdmin from "./Componentes/inicio_admin";

// 🔹 CRUD y gestión
import AltaAula from "./Componentes/AltaAula";
import ListadoAulas from "./Componentes/ListadoAulas";
import AltaPersonal from "./Componentes/AltaPersonal";
import ListadoPersonal from "./Componentes/ListadoPersonal";
import AltaHorario from "./Componentes/AltaHorario";
import ListadoHorarios from "./Componentes/ListadoHorario";

// ================================================
// 🔹 COMPONENTE PANEL ADMIN / USUARIO
// ================================================
const PanelAdminUsuario = ({ tipo }) => {
  const navigate = useNavigate();
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

      <button className="btn btn-volver" onClick={() => navigate("/")}>
        Volver al Inicio
      </button>

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

// ================================================
// 🔹 HOME
// ================================================
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <button className="button-classroom" onClick={() => navigate("/inicio_admin")}>
        <div className="logo-wrapper">
          <svg className="classroom-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="100%" height="100%" rx="4" fill="#1a73e8" />
            <circle cx="12" cy="10" r="3" fill="white" />
            <rect x="6" y="15" width="12" height="2" fill="white" />
          </svg>
          <svg className="crown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path fill="gold" d="M8 24L24 8l8 16 8-16 16 16-8 24H16z" />
          </svg>
        </div>
      </button>

      <button className="button-classroom" onClick={() => navigate("/inicio_usuario")}>
        <div className="logo-wrapper">
          <svg className="classroom-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="100%" height="100%" rx="4" fill="#1a73e8" />
            <circle cx="12" cy="10" r="3" fill="white" />
            <rect x="6" y="15" width="12" height="2" fill="white" />
          </svg>
        </div>
      </button>
    </div>
  );
};

// ================================================
// 🔹 APP PRINCIPAL (SIN ROUTER)
// ================================================
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Panel_Admin" element={<PanelAdminUsuario tipo="admin" />} />
      <Route path="/Panel_Usuario" element={<PanelAdminUsuario tipo="usuario" />} />
      <Route path="/Login_Admin" element={<Login_Admin />} />
      <Route path="/Login_Usuario" element={<Login_Usuario />} />
      <Route path="/Registro_Admin" element={<Registro_Admin />} />
      <Route path="/inicio_usuario" element={<InicioUsuario />} />
      <Route path="/inicio_admin" element={<InicioAdmin />} />
    </Routes>
  );
};

export default App;
