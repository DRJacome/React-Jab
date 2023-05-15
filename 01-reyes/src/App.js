import react from "react";
import "./App.css";
import "./reyes.css";
import atanagildo from "./images/reyes/rey_atanagildo.png";
import ataulfo from "./images/reyes/rey_ataulfo.png";
import ervigio from "./images/reyes/rey_ervigio.png";
import oculto from "./images/reyes/oculto.png";

function App() {
  let reyes = [atanagildo, ataulfo, ervigio];

  const cambiarTexto = (texto) => {
    if (texto.target.innerHTML == "Visto") {
      texto.target.innerHTML = "";
    } else {
      texto.target.innerHTML = "Visto";
    }
  };

  const cambiarImagen = (imagen) => {
    console.log(imagen.target);
    if (imagen.target.src.includes("oculto")) {
      imagen.target.style.visibility = "hidden";
    } else {
      imagen.target.src = oculto;
    }
    imagen.target.src = oculto;
    imagen.target.parentNode.style.background = "none";
  };

  return (
    <div className="app">
      <div className="caja">
        <div className="contenedor">
          <img onClick={cambiarImagen} src={reyes[0]} alt="rey" />
          <p onClick={cambiarTexto}>Atanagildo</p>
        </div>
        <div className="contenedor">
          <img onClick={cambiarImagen} src={reyes[1]} alt="rey" />
          <p onClick={cambiarTexto}>Ataulfo</p>
        </div>
        <div className="contenedor">
          <img onClick={cambiarImagen} src={reyes[2]} alt="rey" />
          <p onClick={cambiarTexto}>Ervigio</p>
        </div>
      </div>
    </div>
  );
}
export default App;
