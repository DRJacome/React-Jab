import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { datos2 } from './datos'
import Context from './context/Context'
import Resumen from './Resumen'

const Form = () => {
  const navegacion = useNavigate()
  const { register, handleSubmit, formState: { errors }, setFocus, reset, watch } = useForm()
  const { etapas, setEtapas, misDatos, setMisDatos } = useContext(Context)
  const obtener = (data) => {
    console.table(data)
    misDatos[etapas] = data.valor;
    setEtapas(etapas + 1)
    setFocus('valor')
    reset()
  }

  const imprimir = () => {
    window.print()
  }

  const volver = () => {
    setEtapas(0)
    setMisDatos([])
    navegacion("/home")
  }

  return (
    <>
      <section className='seccion'>
        {etapas > 6
          ?
          <div className='opciones'>
            <h2>¿Quieres modificar tus datos o finalizar tu pedido?</h2>
            <button className='volver' onClick={volver}>Volver</button>
            <button className='imprimir' onClick={imprimir}>Imprimir</button>
          </div>
          :
          <form onSubmit={handleSubmit(obtener)}>
            <h2>{datos2[etapas].texto}
              <span className='verde'>
                {watch("valor")}
                {watch('valor.length') > 0 &&
                  <span>{datos2[etapas].sufijo}</span>
                }
              </span>

            </h2>
            <input autoFocus autoComplete="off"
              {...register('valor',
                {
                  required: datos2[etapas].obligatorio,
                  min: datos2[etapas].minimo,
                  max: datos2[etapas].maximo
                })} />
            {errors.valor?.type === "required" && <p>Tu nombre es obligatorio</p>}
            {errors.valor?.type === "min" && <p>El mínimo es {datos2[etapas].minimo}.</p>}
            {errors.valor?.type === "max" && <p>Como máximo puedes reservar {datos2[etapas].maximo}.</p>}
            <hr />
            <input type='submit' value="Enviar" />
          </form>
        }
        <Resumen />
      </section>
    </>
  )
}
export default Form