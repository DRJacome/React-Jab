import styled, { css, keyframes } from "styled-components";

const miColor = "gold";

const animacion = (valor) => keyframes`
0%{
  transform:rotate(0deg)
}
100%{
  transform:rotate(${valor}deg)
}
`;

export const Titulo = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ elColor }) => (elColor ? elColor : "silver")};
  margin: 2px;
  ${(props) =>
    props.redondo &&
    css`
      border-radius: 50%;
      border: 2px solid black;
    `}
  &:hover {
    border: 5px solid ${miColor};
    animation: ${animacion} 1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;

export const Contenedor = styled.div`
  display: flex;
`;

export const Moverse = styled.div`
  width: 200px;
  height: 100px;
  margin: 2px;
  background-color: olive;
  animation: ${(props) => animacion(props.distancia)} ${(props) => props.segs}s
    ease-out;
  animation-fill-mode: forwards;
`;

export const Sombra = styled(Titulo)`
  box-shadow: 0 0 20px red;
  background-color: blue;
`;
