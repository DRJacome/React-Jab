import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto'

const NavBar = () => {
  const navegacion = useNavigate()
  const { desloguearme } = useContext(Contexto)
  
  const login = () => {
    navegacion('/login', { replace: true })
    /* navegacion('/login', { replace: true }):
* Esta instrucción crea una lista de páginas que han sido visitadas.
* Para evitar que el usuario, al desloguearse, 
* pueda volver a acceder al contenido de la páginacon "flecha atrás" del navegador, 
* utilizo useNavigate.
* El parámetro "replace: true" no incluye la página indicada (/login) en la lista,
* forzando a que el usuario tenga que volver a loguearse para acceder al contenido.
*/
    desloguearme()
  }
  return (
    <>
      <nav>
        <NavLink to="contenido1">Contenido 1</NavLink>
        <NavLink to="contenido2">Contenido 2</NavLink>
        <NavLink to="contenido3">Contenido 3</NavLink>
        <button onClick={login}>Logout</button>
      </nav>
    </>
  )
}
export default NavBar