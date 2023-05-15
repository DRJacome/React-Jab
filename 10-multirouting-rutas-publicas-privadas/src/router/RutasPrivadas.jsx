import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Contenido1 from '../paginas/Contenido1'
import Contexto from '../context/Contexto'

const RutasPrivadas = ({ children }) => {
  const { estado } = useContext(Contexto)
  return ((estado)
    ? children
    : <Navigate to={"/login"} />
  )
}
export default RutasPrivadas