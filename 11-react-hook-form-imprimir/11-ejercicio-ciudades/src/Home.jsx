/* INSTALAR MEDIANTE TERMINAL: npm i react-hook-form, npm install react-router-dom */
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Context from './context/Context'
import { datos } from "./data"
import { datos2 } from "./datos"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { etapas, setEtapas, misDatos } = useContext(Context)
  const navegacion = useNavigate()

  const obtener = (data) => {
    const miZona = data.valor;
    /* //const Datos = datos.find(d => d.lugar)//
    * uso find() para buscar en "datos"; "d" recorre todo "datos", y por cada dato encontrado en "d",
    * obtiene la información almacenada en "d.lugar"
    *  (es decir, la tarjeta que sea clicada -> Marítima, Ciudades, Naturales o de Riesgo)
    *  y que coincida con la constante "miZona", para almacenarlo en const Datos.
    */
    const Datos = datos.find(d => d.lugar === miZona);
    misDatos.push(Datos.imagen)
    misDatos.push(Datos.lugar)
    misDatos.push(Datos.precio)
    setEtapas(etapas + 3)
    navegacion('/form')
    console.table(misDatos)
  }
  return (
    <>
      <form onSubmit={handleSubmit(obtener)}>
        <nav>
          <span>{datos2[etapas].texto}</span>
          <input type='submit' value="Enviar" />
          {
            errors.valor?.type === "required" &&
            <span className='aviso'>Selecciona una de las siguientes opciones:</span>
          }

        </nav>
        <div className='formularioZonas'>
          {datos.map(data =>
            <div className='zonas' key={data.lugar}>
              <div className='zona'>
                <input type='radio' name='listado' className='lugar' value={data.lugar}
                  {...register("valor", { required: true })} />
                <span className='poblacion'>{data.lugar}</span>
                <span className='precio'>{data.precio} €</span>
              </div>
              <img src={data.imagen} alt={data.lugar} />
            </div>
          )}
        </div>
      </form>
    </>
  )
}
export default Home