import React, { useReducer, useState } from 'react'

const types = {
  masMes: 'masMes',
  menosMes: 'menosMes',
  masAno: 'masAno',
  menosAno: 'menosAno'
}

const currentTime = new Date()
const month = currentTime.getMonth()
const year = currentTime.getFullYear()

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const valorInicial = { mes: month, ano: 2023 }
const reducer = (state, action) => {

  let newMonth = state.mes
  let newYear = state.ano
  /* switch (action.type) {
    case types.masMes:
      newMonth = newMonth === 11 ? 0 : newMonth + 1
      break;
    case types.menosMes:
      newMonth = newMonth === 0 ? 11 : newMonth - 1
      break;
    case types.masAno:
      newYear = newYear + 1
      break
    case types.menosAno:
      newYear = newYear - 1
      break
    default:
      break;
  } */
  switch (action.type) {
    case types.masMes:
      newMonth = newMonth === 11 ? 0 : newMonth + action.payload
      break;
    case types.menosMes:
      newMonth = newMonth === 0 ? 0 : newMonth - action.payload
      break
    case types.masAno:
      newYear = newYear + action.payload
      break;
    case types.menosAno:
      newYear = newYear - action.payload
      break;
    default:
      alert("No se puede realizar la operación solicitada.")
      break;
  }
  return { mes: newMonth, ano: newYear }
}

const Calendario = () => {
  const [fecha, dispatch] = useReducer(reducer, valorInicial)
  const [unidades, setUnidades] = useState(1)
  return (
    <>
      <div className='fecha' style={
        ((fecha.mes < month && fecha.ano <= year) || (fecha.ano < year))
          ? { color: 'red' }
          : { color: 'green' }
      }>
        {meses[fecha.mes]} ({fecha.ano})
      </div>
      <div>
        <button onClick={() => dispatch({ type: types.menosMes, payload: Number(unidades) })}>-</button>
        <span>Meses: </span>
        <button onClick={() => dispatch({ type: types.masMes, payload: Number(unidades) })}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: types.menosAno, payload: Number(unidades) })}>-</button>
        <input type='number' value={unidades} onChange={(e) => setUnidades(e.target.value)} />
        <span>Años: </span>
        <button onClick={() => dispatch({ type: types.masAno, payload: Number(unidades) })}>+</button>
      </div>
    </>
  )
}
export default Calendario