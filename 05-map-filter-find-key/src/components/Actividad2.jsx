import React from "react";

function Actividad2({ reyes }) {
  const borrar = (contenedorRey) => {
    contenedorRey.target.parentElement.remove();
  };
  return (
    <>
      {reyes
        .filter((rey) => !rey.nombre.includes("g"))
        .map((rey) => (
          <div key={rey.nombre} className="cuadroRey">
            <p>{rey.nombre}</p>
            <button className="botonBorrar" onClick={borrar}>
              Borrar
            </button>
          </div>
        ))}
    </>
  );
}
export default Actividad2;
