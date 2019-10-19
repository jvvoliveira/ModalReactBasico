import React, { useState, useRef } from 'react';
import './App.css';
import Modal from './Component/Modal/Modal';

const App = () => {

  const [dropdown, setDropdown] = useState(""); 
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log("show");
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    event.stopPropagation(); //impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) { //se clicar fora do modal, ele DESaparece
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleDropdown}>Click Here!</button>
        <Modal className={dropdown} modalRef={modalRef}/>
      </header>
    </div>
  );
}

export default App;
