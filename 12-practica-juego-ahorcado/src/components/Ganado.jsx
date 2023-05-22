import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ganado = () => {
  const navegacion = useNavigate()
  return (
    <>
      <h1>HAS GANADO!</h1>
      <h2>Si quieres volver a jugar, pulsa el botón más abajo.</h2>
      <div className='imagen'>
        <img src={require(`../assets/el_ahorcado1.png`)} alt="" />
      </div>
      <button onClick={() => navegacion("/juego")}>Volver a jugar</button>
    </>
  )
}
export default Ganado