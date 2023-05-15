import React, { useContext, useState } from 'react'
import Profesora from './Profesora'
import Ubicacion from './Ubicacion'
import Contexto from '../contexto2/Contexto'

function Pagina() {
  const { alumno } = useContext(Contexto)
  const [ocultarProfesora, setOcultarProfesora] = useState(false)
  const [ocultarUbicacion, setOcultarUbicacion] = useState(false)
  const idioma = alumno[3].idioma

  const mostrarProfesora = () => {
    setOcultarProfesora(!ocultarProfesora)
    setOcultarUbicacion(false)
  }
  const mostrarUbicacion = () => {
    setOcultarUbicacion(!ocultarUbicacion)
    setOcultarProfesora(false)
  }
  return (
    <>
      <h1>{alumno[idioma].titulo}</h1>
      <h2>{alumno[idioma].texto}</h2>
      <div className='botones'>
        <button onClick={mostrarProfesora}>{alumno[idioma].boton1}</button>
        <button onClick={mostrarUbicacion}>{alumno[idioma].boton2}</button>
      </div>
      {ocultarProfesora ? <Profesora /> : null}
      {ocultarUbicacion ? <Ubicacion /> : null}

    </>
  )
}
export default Pagina