import react, { useState } from 'react';
import Cena from './components/Cena.jsx';
/* import MiComponente from './components/MiComponente.jsx'; */
import './App.css';

/* function App() {
  return (
    <>
      <h1>Reyes Godos</h1>
      <MiComponente rey={{ nombre: 'Atanagildo', reses: 12 }} />
      <MiComponente rey={{ nombre: 'Ataúlfo', reses: 18 }} />
    </>
  );
} */

/* ACTIVIDAD */
function App() {
  const [total, setTotal] = useState(0)
  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178
    }, {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169
    }, {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81
    }, {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126
    }, {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141
    }, {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69
    }
  ]

  return (
    <>
      <h1>Total a pagar: {total} €</h1>
      <div className='cajaCentral'>
        <Cena nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} setTotal={setTotal} />
        <Cena nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} setTotal={setTotal} />
        <Cena nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} setTotal={setTotal} />
        <Cena nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} setTotal={setTotal} />
        <Cena nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} setTotal={setTotal} />
      </div>
    </>
  );
}

export default App;
