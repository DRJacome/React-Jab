import { Link } from 'react-router-dom'

export default function Home() {
  const lista = ["atanagildo", "ervigio", "sisebuto", "ataulfo", "leovigildo", "recesvinto"]
  return (
    <div className='reyes'>
      {
        lista.map(rey =>
          <Link to={`/reyes/${rey}`}>
            <img src={`https://www.html6.es/img/rey_${rey}.png`} alt=''/>
          </Link>)
      }
    </div>
  )
}