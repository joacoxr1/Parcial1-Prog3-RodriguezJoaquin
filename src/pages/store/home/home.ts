import { PRODUCTS } from "../../../data/data";
import { logout } from "../../../utils/auth";

const buttonLogout = document.getElementById("logoutButton") as HTMLButtonElement;
if (buttonLogout) {
  buttonLogout.addEventListener("click", (e) => {
    e.preventDefault();
    logout();
  });
}

const contenedor = document.getElementById("contenedor-productos");

const renderProductos = (lista: typeof PRODUCTS) => {
  if (contenedor) {
    contenedor.innerHTML = "";
    lista.forEach((prod) => {
      contenedor.innerHTML += `
        <article>
            <img src="${prod.imagen}" width="250" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
            <strong>$${prod.precio}</strong>
            <br>
            <button class="btn-agregar" data-id="${prod.id}">Agregar</button>
        </article>
      `;
    });

    asignarEventosAgregar();
  }
};

const asignarEventosAgregar = () => {
  const botonesAgregar = document.querySelectorAll(".btn-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = parseInt(boton.getAttribute("data-id") || "0");
      const productoSeleccionado = PRODUCTS.find((p) => p.id === id);

      if (productoSeleccionado) {
        let carritoActual = JSON.parse(localStorage.getItem("cart") || "[]");
        
        // Buscamos si el producto ya está en el carrito
        const productoEnCarrito = carritoActual.find((p: any) => p.id === id);

        if (productoEnCarrito) {
          // Si ya existe, aumentamos la cantidad
          productoEnCarrito.cantidad += 1;
        } else {
          // Si es nuevo, lo agregamos con cantidad inicial de 1
          carritoActual.push({ ...productoSeleccionado, cantidad: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(carritoActual));
        alert(`${productoSeleccionado.nombre} agregado al carrito`);
      }
    });
  });
};

const botonesCategorias = document.querySelectorAll(".btn-categoria");
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoria = boton.getAttribute("data-categoria");
        
        if (categoria === "todas") {
            renderProductos(PRODUCTS);
        } else {
            const filtrados = PRODUCTS.filter(p => p.categoria === categoria);
            renderProductos(filtrados);
        }
    });
});

// Lógica del Buscador
const inputBusqueda = document.getElementById("buscarProducto") as HTMLInputElement;
const formBusqueda = document.querySelector("form");

if (formBusqueda && inputBusqueda) {
  formBusqueda.addEventListener("submit", (e) => {
    e.preventDefault();
    const termino = inputBusqueda.value.toLowerCase().trim();

    const filtrados = PRODUCTS.filter((p) => 
      p.nombre.toLowerCase().includes(termino) || 
      p.categoria.toLowerCase().includes(termino)
    );

    renderProductos(filtrados);
  });

  inputBusqueda.addEventListener("input", () => {
    const termino = inputBusqueda.value.toLowerCase().trim();
    if (termino === "") {
      renderProductos(PRODUCTS);
    }
  });
}

renderProductos(PRODUCTS);