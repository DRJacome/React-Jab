import React from 'react'
import { useNavigate } from 'react-router-dom'

const Portada = () => {
  const navegacion = useNavigate()

  return (
    <>
      <h1>BIENVENID@!</h1>
      <h2>Pulsa en el botón de abajo para empezar a jugar.</h2>
      <button className='boton' onClick={() => navegacion("/juego")}>Jugar</button>
    </>
  )
}
export default Portada