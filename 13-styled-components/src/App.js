/* NOTA: instalar mediante terminal "npm install styled-components@latest" */
import { Titulo, Contenedor, Moverse, Sombra } from "./estilos";

function App() {
  return (
    <>
      <Contenedor>
        <Titulo elColor="red">Caja 1</Titulo>
        <Titulo redondo elColor="pink">
          Caja 2
        </Titulo>
        <Titulo redondo>Caja 3</Titulo>
        <Titulo>Caja 4</Titulo>
      </Contenedor>
      <Moverse distancia={333} segs={12}>Caja 5</Moverse>
      <Moverse distancia={111} segs={3}>Caja 5</Moverse>
      <Moverse distancia={222} segs={2}>Caja 5</Moverse>
      <Moverse distancia={50} segs={12}>Caja 5</Moverse>
      <Sombra></Sombra>
    </>
  );
}

export default App;
