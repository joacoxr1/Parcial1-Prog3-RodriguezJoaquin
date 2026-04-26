const contenedorCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total-precio");
const botonVaciar = document.getElementById("vaciar-carrito") as HTMLButtonElement;
const botonFinalizar = document.getElementById("finalizar-compra") as HTMLButtonElement;

const renderCarrito = () => {
    const productosCarrito = JSON.parse(localStorage.getItem("cart") || "[]");
    
    if (contenedorCarrito) {
        contenedorCarrito.innerHTML = "";
        let acumulado = 0;

        if (productosCarrito.length === 0) {
            contenedorCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        }

        productosCarrito.forEach((prod: any, index: number) => {
            // Calculamos el subtotal de este producto (precio x cantidad)
            const subtotal = prod.precio * prod.cantidad;
            acumulado += subtotal;

            contenedorCarrito.innerHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #eee;">
                    <div>
                        <strong style="font-size: 1.1rem;">${prod.nombre} (x${prod.cantidad})</strong>
                        <p style="margin: 5px 0; color: #666;">Unitario: $${prod.precio} | Subtotal: $${subtotal}</p>
                    </div>
                    <button class="btn-eliminar" data-index="${index}" style="background-color: #ff6b6b; color: white; border: none; padding: 5px 15px; border-radius: 5px; cursor: pointer;">Eliminar</button>
                </div>
            `;
        });

        if (totalElemento) totalElemento.innerText = acumulado.toString();

        // Validación de estado de botones
        if (botonFinalizar && botonVaciar) {
            if (productosCarrito.length === 0) {
                botonFinalizar.disabled = true;
                botonVaciar.disabled = true;
                botonFinalizar.style.backgroundColor = "#ccc";
                botonVaciar.style.backgroundColor = "#ccc";
                botonFinalizar.style.cursor = "not-allowed";
                botonVaciar.style.cursor = "not-allowed";
            } else {
                botonFinalizar.disabled = false;
                botonVaciar.disabled = false;
                botonFinalizar.style.backgroundColor = "#27ae60";
                botonVaciar.style.backgroundColor = "#ff6b6b";
                botonFinalizar.style.cursor = "pointer";
                botonVaciar.style.cursor = "pointer";
            }
        }

        const botonesEliminar = document.querySelectorAll(".btn-eliminar");
        botonesEliminar.forEach((boton) => {
            boton.addEventListener("click", () => {
                const index = parseInt(boton.getAttribute("data-index") || "0");
                eliminarProducto(index);
            });
        });
    }
};

const eliminarProducto = (index: number) => {
    const productosCarrito = JSON.parse(localStorage.getItem("cart") || "[]");
    productosCarrito.splice(index, 1); 
    localStorage.setItem("cart", JSON.stringify(productosCarrito));
    renderCarrito();
};

if (botonVaciar) {
    botonVaciar.addEventListener("click", () => {
        localStorage.removeItem("cart");
        renderCarrito();
    });
}

if (botonFinalizar) {
    botonFinalizar.addEventListener("click", () => {
        alert("¡Gracias por tu compra! Tu pedido está en camino.");
        localStorage.removeItem("cart");
        window.location.href = "../home/home.html";
    });
}

renderCarrito();