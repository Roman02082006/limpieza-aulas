import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function App() {
  const [dropdown, setDropdown]=useState(false);

  const abrircerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  return (
    <div className="App position-absolute top-0 start-0 m-3">
    <Dropdown isOpen={dropdown} toggle={abrircerrarDropdown} direction="right">
      <DropdownToggle caret>
        soy un Dropdown
      </DropdownToggle>

      <DropdownMenu>
        <DropdownItem>accion 1</DropdownItem>
        <DropdownItem>accion 2</DropdownItem>
        <DropdownItem>accion 3</DropdownItem>
        <DropdownItem>accion 4</DropdownItem>
      </DropdownMenu>

    </Dropdown>
    </div>
  );
  
}

export default App;
