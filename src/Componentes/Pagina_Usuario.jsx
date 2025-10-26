import React, { useState } from "react";
import "./Pagina_Usuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FaEllipsisV, FaBroom, FaSchool, FaExclamationTriangle } from "react-icons/fa";

function PaginaUsuario() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const aulas = [
    { id: 1, nombre: "Aula 101", estado: "Limpia" },
    { id: 2, nombre: "Aula 102", estado: "En limpieza" },
    { id: 3, nombre: "Aula 103", estado: "Pendiente" },
    { id: 4, nombre: "Laboratorio 1", estado: "Limpia" },
    { id: 5, nombre: "Aula 104", estado: "Pendiente" },
  ];

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="App">
    
      <div className="menu-icon" onClick={toggleSidebar}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="menu-items">
          <div className="icon-square" />
          <div className="icon-square" />
          <div className="icon-circle" />
        </div>

        <div className="bottom-section">
          <div className="icon-circle" />
          <div className="input-placeholder" />
          <div className="icon-hex" />
        </div>
      </div>

     
      <div className="main-content">
        <span>Página Principal del Usuario</span>

        <h2 className="titulo-aulas">Listado de Aulas</h2>
        <div className="aulas-grid">
          {aulas.map((aula) => (
            <div
              key={aula.id}
              className={`aula-card ${aula.estado.toLowerCase().replace(" ", "-")}`}
            >
              <div className="icono-estado">
                {aula.estado === "Limpia" && <FaSchool className="icon limpia-icon" />}
                {aula.estado === "En limpieza" && <FaBroom className="icon limpieza-icon" />}
                {aula.estado === "Pendiente" && (
                  <FaExclamationTriangle className="icon pendiente-icon" />
                )}
              </div>
              <h3>{aula.nombre}</h3>
              <p className="estado">{aula.estado}</p>
            </div>
          ))}
        </div>

        <div className="header">
          <div className="icon-circle">
            <div className="circle-white" />
            <div className="circle-dark" />

            <div className="dropdown-container">
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction="down">
                <DropdownToggle caret={false} className="custom-toggle">
                  <FaEllipsisV size={20} />
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Acción 1</DropdownItem>
                  <DropdownItem>Acción 2</DropdownItem>
                  <DropdownItem>Acción 3</DropdownItem>
                  <DropdownItem>Acción 4</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaUsuario;