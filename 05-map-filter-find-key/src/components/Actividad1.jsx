import React from "react";

function Actividad1({ reyes }) {
  const url = "https://www.html6.es/img/rey_";
  const resultado = reyes.map((rey) => (
    <div key={rey.nombre} className="tarjetaRey">
      <p>
        <span className="rojo">{rey.nombre.toUpperCase()}</span> ha comido{" "}
        {rey.vacasComidas * 365 * rey.reinado} vacas en {rey.reinado} años de
        reinado.
      </p>
      <img src={url + rey.nombre + ".png"} alt={rey.nombre} />
    </div>
  ));
  return <>{resultado}</>;
}

export default Actividad1;
