import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { agregarUnValor, eliminarUnValor, guardarMiNombre, incrementarPuntuacion, modificarUnValor } from '../store/misSlices'

const Uno = () => {
  const dispatch = useDispatch()
  const miNombreAhora = useSelector(state => state.unValor.miNombre)
  const miPuntuacionAhora = useSelector(state => state.otroValor.puntuacion)

  const modificar = () => {
    dispatch(guardarMiNombre("Bob Esponja"))
  }
  const incrementar = () => {
    dispatch(incrementarPuntuacion())
  }
  const modificarArray = () => {
    dispatch(modificarUnValor(
      {
        indice: 0,
        nuevoNombre: "React",
        nuevoInicio: "Mayo de 2013"
      }
    ))
  }

  const agregar = () => {
    dispatch(agregarUnValor(
      {
        nuevoNombre: "Vue",
        nuevoInicio: "2014"
      }
    ))
  }
  const eliminar = () => {
    dispatch(eliminarUnValor("Vue"))
  }

  return (
    <>
      <h1>{miNombreAhora}</h1>
      <h1>{miPuntuacionAhora}</h1>
      <button onClick={modificar}>Modificar mi nombre</button>
      <button onClick={incrementar}>Incrementar puntuación</button>
      <button onClick={modificarArray}>Incrementar un valor</button>
      <button onClick={agregar}>Agregar un valor</button>
      <button onClick={eliminar}>Eliminar un valor</button>
    </>
  )
}
export default Uno