import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const Final = () => {
  const navegacion = useNavigate()
  const { palabraCorrecta } = useContext(Contexto)
  return (
    <>
      <h1>Has perdido!</h1>
      <h2>La respuesta correcta era: <strong>{palabraCorrecta}</strong></h2>
      <div className='imagen'>
        <img src={require(`../assets/el_ahorcado6.png`)} alt="" />
      </div>
      <button onClick={() => navegacion("/juego")}>Volver a jugar</button>
    </>
  )
}
export default Final