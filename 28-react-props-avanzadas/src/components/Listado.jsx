const Listado = ({nombres}) => {
  return (
    <>
      {nombres.map((valor, indice) =>
        <div key={indice}>{valor}</div>
      )}
    </>
  )
}
export default Listado