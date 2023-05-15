import React, { useState } from "react";

function Actividad4({ reyes }) {
  const aumentar = (cajaContador) => {
    ++cajaContador.target.innerHTML;
  };
  return (
    <>
      {reyes
        .filter((rey) => rey.vacasComidas > 10 && rey.reinado > 10)
        .map((rey) => (
          <div key={rey.nombre} className="cajaRey">
            <p>{rey.nombre}</p>
            <div onClick={aumentar} className="numero">
              0
            </div>
          </div>
        ))}
    </>
  );
}
export default Actividad4;
