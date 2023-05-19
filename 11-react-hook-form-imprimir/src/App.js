/* INSTALAR MEDIANTE TERMINAL: npm i react-hook-form */
import React from "react"
import { useForm } from "react-hook-form"
import './index.css'
import validador from './validadorTelefono'

function App() {
  const { register, handleSubmit, formState: { errors }, watch, setFocus, resetField } = useForm()
  const obtenerValores = (data) => {
    console.table(data);
    resetField('telefono')
    setFocus('telefono')
  }
  return (
    <>
      <form onSubmit={handleSubmit(obtenerValores)}>
        <div className="pregunta">
          <label htmlFor="nombre">Escribe nombre:</label>
          <input id="nombre" placeholder="nombre" autoFocus
            {...register('nombre',
              {
                required: true,
                maxLength: 15
              }
            )} />
        </div>
        {
          /* "&&" -> es un operador. Se sustituye por una condición normal. 
          * if (errors.nombre?.type === "required") {
          *    <div className="aviso">El nombre de usuario es obligatorio</div>
          * }
          */
          errors.nombre?.type === "required" &&
          <div className="aviso">El nombre de usuario es obligatorio.</div>
        }
        {

          errors.nombre?.type === "maxLength" &&
          <div className="aviso">No se pueden escribir más de 15 caracteres.</div>
        }

        <div className="pregunta">
          <label htmlFor="edad">Edad:</label>
          <input id="edad" type="number"
            placeholder="edad"
            {...register('edad',
              {
                min: 1,
                max: 120
              }
            )} />
        </div>
        {
          errors.edad?.type === "min" &&
          <div className="aviso">La edad debe ser mayor a 1 año.</div>
        }
        {
          errors.edad?.type === "max" &&
          <div className="aviso">La edad debe ser menor a 120 años.</div>
        }
        <div className="pregunta">
          <label htmlFor="email">E-mail:</label>
          <input id="email" placeholder="e-mail"
            {...register('email',
              {
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
              }
            )} />
        </div>
        {
          errors.email?.type === "pattern" &&
          <div className="aviso">La dirección de email no se ajusta a los requisitos.</div>
        }
        <div className="pregunta">
          <label htmlFor="telefono">Teléfono:</label>
          <input id="telefono" type="number" placeholder="teléfono"
            {...register('telefono',
              {
                validate: validador
              }
            )} />
        </div>
        {
          errors.telefono?.type === "validate" &&
          <div className="aviso">El número de teléfono debe ser fijo y el prefijo debe pertenecer a cualquiera de las provincias de Galicia.</div>
        }
        <div>
          <input type="submit" />
        </div>
      </form>
      <div>
        {
          watch('nombre') &&
          <div className="resumen">
            Me llamo <strong>{watch('nombre')}</strong>
            {
              watch('edad') &&
              <span> y tengo <strong>{watch('edad')}</strong> años.</span>
            }
          </div>
        }
      </div>

    </>
  )
}
export default App