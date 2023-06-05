import { useEffect, useState } from 'react';
import { datos } from './assets/datos';
import './App.css';
import estrella from './images/estrella.png'

function App() {
  const [productos, setProductos] = useState(datos)
  const [misProductos, setMisProductos] = useState([])
  const [productosOrdenados, setProductosOrdenados] = useState([])
  let estrellas = []

  const comprar = (idProducto, nombreProducto) => {
    setMisProductos([...misProductos, {
      producto: nombreProducto,
      estrellas: 1
    }])
    setProductos(prevItems =>
      prevItems.map(item => {
        if (item.id === idProducto) {
          return { ...item, estado: true }
        }
        return item
      })
    )
  }

  const constuirEstrellas = (cantidadEstrellas) => {
    estrellas = []
    for (let i = 0; i < cantidadEstrellas; i++) {
      estrellas.push(<img key={i} src={estrella} alt='Estrella' />)
    }
    return estrellas
  }
  const incrementar = (nombreProducto, cantidadEstrellas) => {
    setMisProductos(prevItems =>
      prevItems.map(item => {
        if (item.producto === nombreProducto) {
          return { ...item, estrellas: (cantidadEstrellas < 5) ? cantidadEstrellas + 1 : cantidadEstrellas }
        }
        return item
      }))
  }
  useEffect(() => {
    setProductosOrdenados(misProductos.sort((a, b) => b.estrellas - a.estrellas))
  }, [misProductos])
  return (
    <>
      <section>
        {productos
          .filter(dato => dato.estado === false)
          .map(dato =>
            <div key={dato.id} className='producto' onClick={() => comprar(dato.id, dato.producto)}>{dato.producto}</div>
          )}
      </section>
      <section>
        {productosOrdenados.map(dato =>
          <div key={dato.producto} className='cuadro'>
            <div onClick={() => incrementar(dato.producto, dato.estrellas)}>
              {dato.producto}
            </div>
            <div>
              {constuirEstrellas(dato.estrellas)}
            </div>
          </div>)}
      </section>
    </>
  );
}

export default App;
