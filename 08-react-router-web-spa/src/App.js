import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import A from './paginas/A'
import B from './paginas/B'
import C from './paginas/C'
import D from './paginas/D'
import Nav from './Nav'
import Error404 from './paginas/Error404';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<A />}></Route>
        <Route path='/pagina2' element={<B />} />
        <Route path='/pagina3' element={<C />} />
        <Route path='/pagina4/:letra' element={<D />} />
        {/* la ruta "<Route path='/pagina1' element={<Navigate to={'/'} />}/>" 
        se establece para que si el usuario accede a la URL http://localhost:3000/pagina1
        no salte el mensaje Error 404. */}
        <Route path='/pagina1' element={<Navigate to={'/'} />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
