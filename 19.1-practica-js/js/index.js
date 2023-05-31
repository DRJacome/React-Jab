const COMPRA = [];
let presupuesto = 30;
let total = 0;

mostrarProductos()
actualizar()

function mostrarProductos() {
  PRODUCTOS
    .filter((valor) => valor.disponible === true && valor.precio <= presupuesto)
    .map((valor) =>
      document.querySelector(".productos").
        insertAdjacentHTML("beforeend",
          `
        <div class="producto">
        <img id=${valor.id} onmouseover="conocer(this)" onmouseleave="limpiar()" onclick="comprar(this)" src="img/${valor.imagen}" alt=${valor.nombre}/>
        </div>
        `)
    );
}

function actualizar() {
  document.querySelector(".presupuesto strong").innerHTML = `${presupuesto} €`;
  document.querySelector(".lista").insertAdjacentHTML("beforeend",
    `
  <div class="total">
  <h3>Total a pagar: ${total} €</h3>
  </div>
  `)
}

function buscar(producto) {
  let idProducto = producto.getAttribute("id")
  return PRODUCTOS.findIndex(valor => valor.id == idProducto)
}

function conocer(producto) {
  let idProducto = buscar(producto)
  console.log(indice);
  let nombre = PRODUCTOS[idProducto].nombre
  let precio = PRODUCTOS[idProducto].precio
  document.querySelector(".info").innerHTML = `${nombre}: <strong>${precio} €</strong>`
}

function limpiar() {
  document.querySelector(".info").innerHTML = ""
}

function comprar(producto) {
  let indice = buscar(producto)
  PRODUCTOS[indice].disponible = false
  COMPRA.push(PRODUCTOS[indice].id)
  presupuesto -= PRODUCTOS[indice].precio
  vaciarCajas()
  mostrarProductos()
  mostrarCarrito()
  limpiar()
  actualizar()
}

function vaciarCajas() {
  document.querySelector(".productos").innerHTML = ""
  document.querySelector(".carrito").innerHTML = ""
  document.querySelector(".lista").innerHTML = ""
  total = 0
}

function devolver(producto) {
  let indice = buscar(producto)
  PRODUCTOS[indice].disponible = true
  presupuesto += PRODUCTOS[indice].precio
  let borrar = COMPRA.indexOf(PRODUCTOS[indice].id)
  COMPRA.splice(borrar, 1)
  vaciarCajas()
  mostrarProductos()
  mostrarCarrito()
  limpiar()
  actualizar()
}

function mostrarCarrito() {
  COMPRA.map(valor => {
    let indice = PRODUCTOS.findIndex(articulo => articulo.id == valor)
    document.querySelector(".carrito").insertAdjacentHTML("beforeend",
      `
    <div class="producto">
      <img id= ${valor} onmouseover="conocer(this)" onmouseleave="limpiar()" onclick="devolver(this)" src="img/${PRODUCTOS[indice].imagen}" alt="${PRODUCTOS[indice].nombre}"/></div>
    `)
    anotar(indice)
  })
}

function anotar(indice) {
  document.querySelector(".lista").insertAdjacentHTML("beforeend",
    `
<div class="linea">
  <div class="columna1">${PRODUCTOS[indice].nombre}</div>
  <div class="columna2">${PRODUCTOS[indice].precio} €</div>
</div>
`)
  total += PRODUCTOS[indice].precio
}