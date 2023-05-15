import React from "react";
function Cena({ nombre, precio, color, setTotal }) {
  const ruta = "https://www.html6.es/img/rey_";
  const imagen = `${ruta}${nombre.toLowerCase()}.png`;
  const comprar = (padre) => {
    /*
     *Cogemos el precio mediate la prop correspondiente, y luego usamos una función flecha
     * para acumular el precio de cada cena con cada rey. "Coste" es el nombre del parámetro
     * auxiliar con el que iremos acumulando el coste de cada cena.
     * Con la variable "padre" accedemosa la caja que contiene la casilla de cada rey.
     */
    setTotal((coste) => coste + precio);
    padre.target.parentNode.parentNode.parentNode.style.display="none"
  };
  return (
    <>
      <div className="rey" style={{ backgroundColor: color }}>
        <h1>{nombre}</h1>
        <img src={imagen} alt="Rey" />
        <div className="titulo">Precio:</div>
        <div className="precio">
          {precio} €
          <div>
            <button onClick={comprar}>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cena;
