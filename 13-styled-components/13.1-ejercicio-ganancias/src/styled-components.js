import styled, { keyframes } from "styled-components";

const unColor = () => {
  const colores = ["gold", "violet", "orangered", "navy", "red", "green"];
  return colores[Math.floor(Math.random() * colores.length)];
};

export const Titulo = styled.div`
  font-size: 3em;
  margin-bottom: 30px;
  color: ${unColor};
`;

export const Caja = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  width: 300px;
  height: 300px;
  border-bottom: 3px solid black;
  border-left: 4px solid gray;
  padding: 10px;
`;

const animacion = (desde, altura) => keyframes`
from{
  height: ${desde}px;
}
to{
  height: ${altura}px;
}
`;

export const Linea = styled.div`
  position: absolute;
  border-top: 1px dashed black;
  width: 300px;
  height: 1px;
  left: 15px;
  bottom: 186px;
`;

export const Barra = styled.div`
  width: 50px;
  background-color: ${(valor) => (valor.color ? valor.color : "silver")};
  margin-right: 10px;
  animation: ${(valor) => animacion(valor.desde, valor.altura)} 1s ease-in-out;
  animation-fill-mode: forwards;
`;
