/* NOTA: instalar desde terminal: npm i styled-components@latest */

import React, { useState } from "react";
import { valores } from "./datos";
import { Titulo, Caja, Linea, Barra } from "./styled-components";

function App() {
  const [datos, setDatos] = useState(valores);

  const agrandar = (altura, indice) => {
    setDatos(
      datos.map((item, index) => {
        if (index === indice) {
          return {
            ...item,
            altura: item.altura < 175 ? item.altura + 40 : item.altura,
            desde: item.altura,
          };
        } else {
          return { ...item, desde: item.altura };
        }
      })
    );
  };

  return (
    <>
      <Titulo>Tus ganancias:</Titulo>
      <Caja>
        {datos.map((valor, indice) => (
          <Barra
            key={indice}
            color={valor.color}
            desde={valor.desde}
            altura={valor.altura}
            onClick={() => agrandar(valor.altura, indice)}></Barra>
        ))}
        <Linea />
      </Caja>
    </>
  );
}

export default App;
