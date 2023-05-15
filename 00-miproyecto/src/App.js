import React from "react";
import "./App.css";
import "./miCss.css";
import imagen from "./1.jpg";

function App() {
  let nombre = [
    { nombre: "David", edad: "18" },
    { nombre: "Pedro", edad: "48" },
  ];
  let caja = <div>Nombre</div>;
  return (
    <div className="fondo">
      <h1>Curso de React</h1>
      <h1>{nombre[1].edad}</h1>
      <img src={imagen} className="im" alt="imagen" />
      <input value={nombre} />
      <div>{caja}</div>
      
      <br/>
    </div>
  );
}

export default App;
