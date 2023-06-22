import React from 'react'
import { useSelector } from 'react-redux'
const Dos = () => {
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  const miArrayAhora = useSelector(state => state.unValor.bibliotecas)
  return (
    <>
      <h1>{miNombreAhora}</h1>
      {miArrayAhora.map(valor =>
        <div key={valor.nombre}>{valor.nombre} ({valor.inicio})</div>)}
    </>
  )
}
export default Dos