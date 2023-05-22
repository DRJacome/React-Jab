import React from 'react'
import { useNavigate } from 'react-router-dom'

const Portada = () => {
  const navegacion = useNavigate()

  return (
    <>
      <h1>BIENVENID@</h1>
      <button className='boton' onClick={() => navegacion("/juego")}>Jugar</button>
    </>
  )
}
export default Portada