import React from 'react'
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Uno from './components/Uno'
import Dos from './components/Dos'
const MiRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Link to={"/uno"}><button>Ir al UNO</button></Link>
          <Link to={"/dos"}><button>Ir al DOS</button></Link>
        </div>
        <Routes>
          <Route path='/uno' element={<Uno />} />
          <Route path='/dos' element={<Dos />} />
        </Routes>
      </Router>
    </>
  )
}
export default MiRouter