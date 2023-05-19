const prefijos = [986, 981, 982, 988]

const validadorTelefono = (valor) => {
  const inicio = Number(valor.substring(0, 3))
  const evaluar = prefijos.indexOf(inicio)
  return (
    evaluar >= 0 && valor.length >= 9 && valor.length <= 10
  )
}

export default validadorTelefono