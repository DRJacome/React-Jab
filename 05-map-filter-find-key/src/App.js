import React from 'react'
import Actividad1 from './components/Actividad1.jsx';
import Actividad2 from './components/Actividad2.jsx';
import Actividad3 from './components/Actividad3.jsx';
import Actividad4 from './components/Actividad4.jsx';
import './App.css';

function App() {
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
  return (
    <div className="App">
      <div className='caja'>
        <h1>Actividad 1:</h1>
        <Actividad1 reyes={reyes} />
      </div>
      <div className='caja'>
        <h1>Actividad 2:</h1>
        <Actividad2 reyes={reyes} />
      </div>
      <div className='caja'><h1>Actividad 3:</h1>
        <span>Reyes cuyo nombre empiece por la letra E:</span>
        <Actividad3 reyes={reyes} />
      </div>
      <div className='caja'><h1>Actividad 4:</h1>
        <Actividad4 reyes={reyes} />
      </div>
    </div>
  );
}

export default App;
