import React, { useReducer, useRef, useState } from 'react'

const types = {
  menos: 'menos',
  mas: 'mas',
  eliminar: 'eliminar',
  comprar: 'comprar'
}

const valorInicial = [{
  id: 1,
  nombre: "Agua",
  cantidad: 3
}, {
  id: 2,
  nombre: "pan",
  cantidad: 2
}
]

const reducer = (state, action) => {
  switch (action.type) {
    case types.menos:
      return state.map(cosa =>
        (action.payload === cosa.id && cosa.cantidad > 1)
          ? { ...cosa, cantidad: cosa.cantidad - 1 }
          : cosa
      )
    case types.mas:
      return state.map(cosa =>
        (action.payload === cosa.id)
          ? { ...cosa, cantidad: cosa.cantidad + 1 }
          : cosa
      )
    case types.eliminar:
      return (state.filter(valor => valor.id !== action.payload))
    case types.comprar:
      return [...state, action.payload]
    default:
      return state
  }
}

const Compra = () => {
  const inputName = useRef(null)
  const [lista, dispatch] = useReducer(reducer, valorInicial)
  const [miProducto, setMiProducto] = useState("")

  return (
    <>
      <label htmlFor='producto'>Producto: </label>
      <input id='producto' ref={inputName} value={miProducto} onChange={(e) => setMiProducto(e.target.value)} />
      <button className='anadir'
        onClick={() => {
          inputName.current.focus();
          setMiProducto("");
          dispatch({
            type: types.comprar,
            payload: { id: Date.now(), nombre: miProducto, cantidad: 1 }
          })
        }}>Añadir</button>
      {lista.map(producto => (
        <div key={producto.id}>
          {producto.nombre} ({producto.cantidad} unidades)
          <button onClick={() => { dispatch({ type: types.menos, payload: producto.id }) }}>-</button>
          <button onClick={() => { dispatch({ type: types.mas, payload: producto.id }) }}>+</button>
          <button onClick={() => { dispatch({ type: types.eliminar, payload: producto.id }) }}>X</button>
        </div>
      ))}
    </>
  )
}
export default Compra