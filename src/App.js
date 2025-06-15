import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaEllipsisV } from 'react-icons/fa';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="App">
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
  );
}

export default App;
