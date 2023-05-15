import React from "react";

function Actividad3({ reyes }) {
  const resultado = reyes.find(
    (rey) => rey.nombre.includes("e") || rey.nombre.includes("E")
    /*  (rey) => rey.nombre.includes("k") || rey.nombre.includes("k")*/
  );

  return (
    <>{resultado === undefined ? "No se ha encontrado." : resultado.nombre}</>
  );
}
export default Actividad3;
