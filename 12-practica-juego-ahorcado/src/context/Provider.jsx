import { useState } from "react"
import Contexto from "./Contexto"


const Provider = ({ children }) => {
  const [palabraCorrecta, setPalabraCorrecta] = useState("")

  const escribirPalabraCorrecta = (palabraAGuardar = "") => {
    setPalabraCorrecta(palabraAGuardar)
  }
  return (
    <Contexto.Provider value={{
      escribirPalabraCorrecta, palabraCorrecta
    }}>
      {children}
    </Contexto.Provider>
  )
}
export default Provider