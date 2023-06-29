import { useState } from "react"

const Formulario = ({ toAdd }) => {
  const [nombre, setNombre] = useState("")

  const modificar = (e) => {
    setNombre(e.target.value)
  }

  return (
    <>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <input id="nombre" type="text" value={nombre} onChange={modificar} />
      </div>
      <div>
        <button onClick={() => toAdd(nombre)}>Añadir</button>
      </div>
    </>
  )
}
export default Formulario