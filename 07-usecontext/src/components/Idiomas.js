import React, { useContext } from 'react'
import Contexto from '../contexto2/Contexto'
import Provider from '../contexto2/Provider'

function Idiomas() {
  const { setAlumno } = useContext(Contexto)
  const { alumno } = useContext(Contexto)
  const sustitucion = posicion => {
    setAlumno(
      /* El map recorre el array alumno creando dos varaibles: dato e indice; 
      dato es un clon del array alumno que el map crea para recorrer el array original,
      e indice es una variable que recorre cada posición del array obetiendo el contenido de cada posición. */
      alumno.map((dato, indice) =>
        indice === 3
          ? { ...dato, idioma: posicion }
          : { ...dato }
      )
    )
  }

  const castellano = () => {
    sustitucion(0)
  }

  const ingles = () => {
    sustitucion(1)
  }
  
  const frances = () => {
    sustitucion(2)
  }

  return (
    <div className='idiomas'>
      <div className='bandera'>
        <img onClick={castellano} src='../images/spain.jpg' />
      </div>
      <div className='bandera'>
        <img onClick={ingles} src='../images/uk.png' />
      </div>
      <div className='bandera'>
        <img onClick={frances} src='../images/francia.png' />
      </div>
    </div>
  )
}
export default Idiomas