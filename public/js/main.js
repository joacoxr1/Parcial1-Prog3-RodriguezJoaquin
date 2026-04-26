const contenedorCategorias = document.getElementById("lista-categorias");

const cargarCategorias = () => {
    categorias.forEach(categoria => {
        contenedorCategorias.innerHTML += `<li><a href="#">${categoria}</a></li>`;
    });
};

cargarCategorias();

const contenedorProductos = document.getElementById("contenedor-productos");

const cargarProductos = () => {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <article>
                <img src="${producto.imagen}" width="250" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <strong>$${producto.precio}</strong>
                <br>
                <button onclick="alert('Agregaste al carrito: ${producto.nombre}')">Agregar</button>
            </article>
        `;
    });
};

cargarProductos();