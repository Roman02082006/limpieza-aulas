import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState (false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="App">

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          
          <div className="menu-icon" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>

      <div className="menu-icon" onClick={toggleSidebar}>
          <div className="bar"/>
          <div className="bar"/>
          <div className="bar"/>   
      </div>

          
      <div className={`sidebar ${sidebarOpen ? 'open' : ""}`}>
        <div className="menu-items">
          <div className="icon-square"/>
          <div className="icon-square"/>
          <div className="icon-circle"/>
      </div>
            
      <div className="bottom-section">
        <div className="icon-circle"/>
        <div className="input-placeholder"/>
        <div className="icon-hex"/>
      </div>
      </div>

      <div className="main-content">
      <div className="header">
      <span>Pagina Principal Del Administrador</span> 
        <div className="theme-switcher">
        <div className="circle-white"></div>
        <div className="circle-dark"></div>

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
        <div className="card">
          <div className="card-header">
            <div className="icon-circle"/>
            <div className="icon-square"/>
            <div className="icon-square"/>
          </div>
          <div className="card-body">
            <div className="line"/>
            <div className="line"/>
            <div className="line"/>

          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
