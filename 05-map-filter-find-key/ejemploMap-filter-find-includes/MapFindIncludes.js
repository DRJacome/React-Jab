import React from "react";

function Map() {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];
  const resultado1 = reyes
    .find((valor) => valor.vacasComidas >= 10 && valor.vacasComidas <= 20);

  const resultado2 = reyes
    .find((valor) => valor.nombre.includes("a"));

  return (
    <>
      <div className="caja">{resultado1.vacasComidas}</div>
      <div className="caja">{resultado2.nombre}</div>
    </>
  );
}

export default Map;
