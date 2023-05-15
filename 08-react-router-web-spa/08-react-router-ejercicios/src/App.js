import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './reyes/Home';
import Modelo from './reyes/Modelo';
import Error404 from './reyes/Error404';
import Nav from './Nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reyes/:rey' element={<Modelo />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
