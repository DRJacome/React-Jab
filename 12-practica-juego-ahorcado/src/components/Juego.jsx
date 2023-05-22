import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PALABROS } from '../assets/palabros'
import Contexto from '../context/Contexto';

const Juego = () => {
  const navegacion = useNavigate();
  const {escribirPalabraCorrecta} = useContext(Contexto)
  const [azar, setAzar] = useState(0);
  const [palabra, setPalabra] = useState([]);
  const [misLetras, setMisLetras] = useState([]);
  const [letrasCorrectas, setLetrasCorrectas] = useState([]);
  const [letrasErroreas, setLetrasErroneas] = useState([]);
  const [imagen, setImagen] = useState(1)

  const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  const letras_array = letras.split("")
  const misColores =
    [
      { backgroundColor: "white" },
      { backgroundColor: "green", color: "white" },
      { backgroundColor: "red", color: "white" }
    ]

  useEffect(() => {
    setAzar(Math.floor(Math.random() * PALABROS.length))
  }, []);
  useEffect(() => {
    setPalabra(PALABROS[azar].palabro.split(""))
    escribirPalabraCorrecta(PALABROS[azar].palabro)
  }, [azar])

  useEffect(() => {
    let noEncontrada = 0
    palabra.map(p => {
      if (misLetras.find(e => e === p) === undefined) {
        noEncontrada++
      }
    })
    if (noEncontrada === 0 && letrasCorrectas.length > 0) {
      navegacion("/ganado")
    }
  }, [letrasCorrectas])

  const pulsada = (botonPulsado) => {
    const letra = botonPulsado.target.innerHTML
    setMisLetras([...misLetras, letra])
    if (palabra.indexOf(letra) >= 0) {
      /* Letra acertada */
      setLetrasCorrectas([...letrasCorrectas, letra])
    } else {
      /* Letra equivocada */
      setLetrasErroneas([...letrasErroreas, letra])
      setImagen(imagen + 1)
      if (imagen > 5) {
        navegacion("/final")
      }
    }
  }

  return (
    <>
      <div className='pregunta'>
        {PALABROS[azar].pregunta}
      </div>
      <div className='palabra'>
        {
          palabra.map((letra, i) =>
            misLetras.indexOf(letra) === -1
              ?
              <div className='palo correcto' key={i}></div>
              :
              <div className='palo incorrecto' key={i}>
                {letra.toUpperCase()}
              </div>
          )
        }
      </div>
      <div className='botones'>
        {
          letras_array.map((letra) => (
            (letrasCorrectas.find(letraCorrecta => letraCorrecta === letra))
              ?
              /* Letra correcta */
              <button key={letra} style={misColores[1]} onClick={pulsada}>{letra}</button>
              :
              (letrasErroreas.find(letraErronea => letraErronea === letra))
                ?
                /* Letra incorrecta */
                <button key={letra} style={misColores[2]}>{letra}</button>
                :
                /* Letra aún no pulsada */
                <button key={letra} style={misColores[0]} onClick={pulsada}>{letra}</button>
          ))
        }
      </div>
      <div className='imagen'>
        <img src={require(`../assets/el_ahorcado${imagen}.png`)} alt=''></img>
      </div>
    </>
  )
}
export default Juego