import { useState } from "react"
import Listado from "./components/Listado"
import Formulario from "./components/Formulario"

function App() {
  const [nombres, setNombres] = useState([])
  const add = (nombre) => {
    setNombres([...nombres, nombre])
  }
  return (
    <>
      <h1>Lista de nombres:</h1>
      <Formulario toAdd={add} />
      <div>
        <Listado nombres={nombres} />
      </div>
    </>
  )
}

export default App