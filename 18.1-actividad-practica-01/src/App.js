import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo512.png";

function App() {
  const estilo1 = { backgroundColor: "red", color: "white", fontSize: "2.5em" };
  const estilo2 = { backgroundColor: "green", color: "white", fontSize: "2em" };

  const [contenido, setContenido] = useState("");
  const [colores, setColores] = useState(estilo1);

  const cambiarNombre = () => {
    setContenido("Hola David");
  };

  const ponerImagen = () => {
    setContenido(<img src={logo} alt="" />);
  };

  const cambiarFondo = () => {
    setColores(estilo2);
  };
  return (
    <>
      <div className="botones">
        <button onClick={() => cambiarNombre()}>Botón 1</button>
        <button onClick={() => ponerImagen()}>Botón 2</button>
        <button onClick={() => cambiarFondo()}>Botón 3</button>
      </div>
      <div className="caja" style={colores}>
        <h1>{contenido}</h1>
      </div>
    </>
  );
}

export default App;
