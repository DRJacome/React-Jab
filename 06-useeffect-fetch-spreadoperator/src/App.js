import { useEffect, useState } from "react";
import "./App.css";

/* function App() {
  const [datos, setDatos] = useState([]);

 
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=1";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        lectura.results.map((persona) => {
          setDatos((personaActual) =>
            [...personaActual, <div key={persona.email}>
              <div>
                {persona.name.first} {persona.name.last}
              </div>
              <div>
                <img src={persona.picture.large} />
              </div>
            </div>
            ])
        })
      })
      .catch(() => console.log("Se ha producido un error"))
  }, []);

  return (
    <>
      <h1>Premiados:</h1>
      {datos}
    </>
  );
}    */
function App() {
  const [chiste, setChiste] = useState()


  const cambiar = () => {
    const url = 'https://api.chucknorris.io/jokes/random'
    const peticion = fetch(url)
    peticion
      .then((chiste) => chiste.json())
      .then(lectura => {
        console.log(lectura)
        setChiste(
          <div key={lectura.id}>
            <p>{lectura.value}</p>
          </div>)
      })
      .catch("Se ha producido un error.")
  }

  useEffect(() => {
    cambiar()
  }, [])
  return (
    <>
      {chiste}
      <button onClick={cambiar}>Otro chiste</button>
    </>
  )
}

export default App;
