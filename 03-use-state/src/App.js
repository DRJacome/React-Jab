import React, { useState } from 'react'
import './App.css'

const App = () => {

  /*   let [contador, setContador] = useState(0) */

  /*   const disminuir = () => {
      setContador(contador - 1)
  
    } */
  /*   const aumentar = () => {
      setContador(contador + 1)
    }
    const restablecer = () => {
      setContador(0)
  
    } */
  /*   return (
      <div>
        <h1>Contador</h1>
        <button onClick={() => { setContador(--contador) }}>Disminuir</button>
        <button onClick={() => { setContador(++contador) }}>Aumentar</button>
        <button onClick={() => { setContador(0) }}>Restablecer</button>
        <h1>{contador}</h1>
      </div>
    )
  } */
  /* 
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [resultado, setResultado] = useState()
  
    const sumar = () => {
      setResultado(Number(numero1) + Number(numero2))
    }
  
    const modificar1 = (e) => {
      setNumero1(e.target.value)
    }
  
  
    const modificar2 = (e) => {
      setNumero2(e.target.value)
    }
    return (
      <div className='caja'>
        <input type='number' value={numero1} onChange={modificar1} />+
        <input type='number' value={numero2} onChange={modificar2} />=
        <input type='number' value={resultado} readOnly />
        <button className='suma' onClick={sumar}>Sumar</button>
      </div>
    ) */
  /*   const [contador, setContador] = useState(0)
    const [texto, setTexto] = useState();
    const reyesGodos = [
      {
        nombre: "Ataúlfo",
        aficion: "comer toros sin pelar",
      }, {
        nombre: "Recesvinto",
        aficion: "leer a Hegel en arameo",
      }, {
        nombre: "Teodorico",
        aficion: "la cría del escarabajo en almíbar"
      }
    ]
  
    const cambio = () => {
      setContador(contador + 1)
      if (contador + 1 >= reyesGodos.length) {
        setContador(0)
      }
      setTexto(<h2>La afición principal de <span className='rojo'>{reyesGodos[contador].nombre}</span> es <span className='verde'>{reyesGodos[contador].aficion}</span></h2>)
    }
  
    return (
      <>
        <button className='boton' onClick={cambio}>Ver siguiente</button>
        <div className='caja'>{texto}</div>
  
      </>
    ) */

  const [resultado1, setResultado1] = useState()
  const [resultado2, setResultado2] = useState()
  const [resultado3, setResultado3] = useState()
  const [resultado4, setResultado4] = useState()

  const cambios = [
    {
      moneda: "Euro",
      cambio: 1,
    }, {
      moneda: "Peso argentino",
      cambio: 236.1,
    }, {
      moneda: "Peso colombiano",
      cambio: 4846.6,
    }, {
      moneda: "Peso mexicano",
      cambio: 19.8,
    }, {
      moneda: "Dólar",
      cambio: 1.09
    }
  ]

  const cambioMoneda = (moneda) => {
    Number(setResultado1(moneda.target.value * cambios[1].cambio))
    Number(setResultado2(moneda.target.value * cambios[2].cambio))
    Number(setResultado3(moneda.target.value * cambios[3].cambio))
    Number(setResultado4(moneda.target.value * cambios[4].cambio))
  }

  return (
    <>
      <div className='cajaVertical'>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" onChange={cambioMoneda} placeholder='0' />

        <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={resultado1} onChange={cambioMoneda} />

        <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={resultado2} onChange={cambioMoneda} />

        <label htmlFor="u3">{cambios[3].moneda}</label>
        <input id="u3" type="number" value={resultado3} onChange={cambioMoneda} />

        <label htmlFor="u4">{cambios[4].moneda}</label>
        <input id="u4" type="number" value={resultado4} onChange={cambioMoneda} />
      </div>
    </>
  )
}

export default App;
