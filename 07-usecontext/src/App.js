/* import "./App.css";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";
import Colores from "./Colores";
import { Datos } from "./contexto/Contexto";

function App() {
  return (
    <>
      <Datos>
        <div className="App">
          <Pagina1 />
          <Pagina2 />
          <Pagina3 />
        </div>
        <Colores />
      </Datos>
    </>
  );
}

export default App;

 */

/* EJERCICIO */
import React from 'react'
import './App.css';
import Idiomas from './components/Idiomas';
import Pagina from './components/Pagina';
import Provider from './contexto2/Provider';

function App() {
  return (
    <Provider>
      <div className='banderas'>
        <Idiomas />
      </div>
      <div className='contenido'>
        <Pagina />
      </div>
    </Provider>
  );
}

export default App;
