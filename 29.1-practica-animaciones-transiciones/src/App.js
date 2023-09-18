
import React, { useRef, useState } from 'react'
//import { valores } from './valores'
import './index.css'

const App = () => {
  const [altura, setAltura] = useState(20)
  const elementoRef = useRef(null)

  const aumentar = () => {
    /* elementoRef.current.classList.toggle('parar') */
    /* (altura > 150)
          ? setAltura(10)
          : setAltura(altura + 25) */
    setAltura(altura + (Math.floor(Math.random() * 70 + 20)))
  }

  const final = () => {
    altura > 190 && setAltura(0)
  }
  return (
    <>
      <div className='container'>
        {/* NOTA: "--altura" es variable CSS, y se enlaza 
          con la variable "altura" de REACT con la interpolación (${}). */}
        <div
          /* ref={elementoRef} */
          className='barra rojo'
          style={{
            /* '--altura': `${altura}px`, */
            /* Si se usa el valor "forwards" dentro de animation en CSS
            * se debe establecer la propiedad "transition" en el archivo JS,
            * puesto que "forwards" no permite modificar la animación desde el CSS.
            */
            height: `${altura}px`,
            transition: 'height 2s ease-in-out'
          }}
          onTransitionEnd={final}
          onClick={aumentar}
        >{altura}</div>

      </div>
    </>
  )
}
export default App