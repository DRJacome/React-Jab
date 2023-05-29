import { useEffect, useState } from "react"

const Hijo = ({ datos, onAction }) => {
  const [valoracion, setValoracion] = useState(0)
  const { nombre, vacas } = datos
  const image = `https://www.html6.es/img/rey_${nombre.toLowerCase()}.png`

  const votar = () => {
    setValoracion(valoracion + 1)
  }

  useEffect(() => {
    onAction(nombre, valoracion)
  }, [valoracion])

  return (
    <>
      <div className="cadaRey">
        <h1>{nombre}</h1>
        <div className="menu">
          Come {vacas} vacas al día
        </div>
        <div>
          <img src={image} alt={nombre} />
        </div>
        <div className="cajaVotacion">
          <button onClick={votar}>Vótame</button>
          <div className="votacion">{valoracion}</div>
        </div>
      </div>
    </>
  )
}
export default Hijo