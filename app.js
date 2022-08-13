const productos = [
  {
    id: 1,
    nombre: "mesa",
    precio: 1234,
  },
  {
    id: 2,
    nombre: "cafe",
    precio: 6000,
  },
  {
    id: 3,
    nombre: "lápiz",
    precio: 6000,
  },
  {
    id: 4,
    nombre: "silla",
    precio: 6000,
  },
  {
    id: 5,
    nombre: "vaso",
    precio: 6000,
  },
];

let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <img
          src="https://loremflickr.com/100/100/${producto.nombre}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: ${producto.precio}</p>
          <button id="btn-catalogo-${producto.id}" class="btn btn-success">Agregar</button>
        </div>
      </div>
    </div>`;
};

const productoCarritoHTML = (producto) => {
  return `
    <div class="col">
      <div class="card">
        <img
          src="https://loremflickr.com/100/100/${producto.nombre}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
        </div>
      </div>
    </div>`;
};

const mostrarCatalogo = () => {
  const catalogoNodo = document.getElementById("catalogo");
  let catalogoHTML = "";

  for (const producto of productos) {
    catalogoHTML += productoCatalogoHTML(producto);
  }

  catalogoNodo.innerHTML = catalogoHTML;
  botonesCatalogo();
};
const mostrarCarrito = () => {
  const carritoNodo = document.getElementById("carrito");
  const precioNodo = document.getElementById("precioTotal");

  let carritoHTML = "";
  let precio = 0;
  for (const producto of carrito) {
    carritoHTML += productoCarritoHTML(producto);
    precio += producto.precio;
  }

  precioNodo.innerHTML = precio;
  carritoNodo.innerHTML = carritoHTML;
  botonesCarrito();
};

const botonesCatalogo = () => {
  for (const producto of productos) {
    const botonId = `btn-catalogo-${producto.id}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const productoCarrito = {
        nombre: producto.nombre,
        idCompra: contadorCarrito,
        precio: producto.precio,
      };

      contadorCarrito += 1;
      carrito.push(productoCarrito);
      mostrarCarrito();
    });
  }
};

const botonesCarrito = () => {
  for (const producto of carrito) {
    const botonId = `btn-carrito-${producto.idCompra}`;
    const botonNodo = document.getElementById(botonId);

    botonNodo.addEventListener("click", () => {
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
      carrito.splice(index, 1);
      mostrarCarrito();
    });
  }
};

mostrarCatalogo();

console.log(productoCatalogoHTML(productos[0]));
