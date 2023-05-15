import React from 'react'
import { Link } from 'react-router-dom'

function C() {
  return (
    <div>
      Página C
      <Link to={'/pagina2'}>Ir a página 2</Link>
    </div>
  )
}
export default C