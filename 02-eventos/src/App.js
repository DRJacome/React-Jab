import react, { useRef } from "react";
import rey1 from "./images/rey_atanagildo.png";
import rey2 from "./images/rey_sisebuto.png";
import "./App.css";

function App() {
  const refCaja = useRef();
  const cambio = 23.16;

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = "red";
    }
    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
      e.target.style.background = "none";
    }
  };

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  };

  const cambiarImagen = (imagen) => {
    if (imagen.target.src.includes("atanagildo")) {
      imagen.target.src = rey2;
    } else {
      imagen.target.src = rey1;
    }
  };

  const lectura = (letras) => {
    refCaja.current.innerHTML = letras.target.value;
  };

  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>
        1
      </div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img onClick={cambiarImagen} src={rey1} />
      </div>
      <input className="campo" onChange={lectura} />
    </>
  );
}

export default App;
