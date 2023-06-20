import React, { useState } from "react"
import './App.css'

const App = () => {
  const letras = [
    {
      nombre: "Viernes",
      miColor: "green",
      id: 1
    },
    {
      nombre: "Sábado",
      miColor: "green",
      id: 2
    },
    {
      nombre: "Domingo",
      miColor: "green",
      id: 3
    },
  ]

  const [colores, setColores] = useState(letras)

  const colorear = (miId) => {
    setColores(colores.map(valor => {
      if (miId === valor.id) {
        return { ...valor, miColor: "red" }
      } else {
        return valor
      }
    }))
  }

  const eliminar = (miId) => {
    setColores(colores.filter(valor => valor.id != miId))
  }
  return (
    <>
      {colores.map(valor =>
        <div className="caja" key={valor.id} /* onClick={() => colorear(valor.id)} */ style={{ color: valor.miColor }}>
          {valor.nombre}
          <button onClick={() => eliminar(valor.id)}>Eliminar</button>
        </div>
      )}
    </>
  )
}
export default App