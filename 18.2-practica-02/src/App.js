import { useState } from "react";
import Hijo from "./components/Hijo";
import "./index.css";

function App() {
  const [mensaje, setMensaje] = useState("Vota por tu rey favorito");
  const sumar = (nombre, valoracion) => {
    setMensaje(
      <div>
        Has votado por <span className="rojo">{nombre}</span>; ahora tiene{" "}
        <span className="rojo">{valoracion}</span> puntos
      </div>
    );
  };
  return (
    <>
      <h2 className="mensaje">{mensaje}</h2>
      <div className="contenedor">
        <Hijo
          onAction={sumar}
          datos={{
            nombre: "Ervigio",
            vacas: 3,
          }}
        />
        <Hijo
          onAction={sumar}
          datos={{
            nombre: "Atanagildo",
            vacas: 9,
          }}
        />
        <Hijo
          onAction={sumar}
          datos={{
            nombre: "Ataulfo",
            vacas: 12,
          }}
        />
        <Hijo
          onAction={sumar}
          datos={{
            nombre: "Leovigildo",
            vacas: 32,
          }}
        />
      </div>
    </>
  );
}

export default App;
