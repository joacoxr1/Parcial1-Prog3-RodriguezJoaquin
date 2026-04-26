Food Store

Descripción

Food Store es una aplicación hecha en parte con Vite y TypeScript que simula un catálogo de productos con un carrito de compras dinámico.
Es un proyecto del ámbito educativo pensado para practicar y aplicar conceptos de desarrollo frontend.

La idea principal es manejar el estado del carrito desde el lado del cliente, usando manipulación del DOM y guardando la información en localStorage.

Los productos se renderizan de forma dinámica y cada acción del usuario actualiza la interfaz en tiempo real. Además, el carrito se guarda en localStorage, por lo que al recargar la página no se pierde la información.

//Nota//

-El selector de rol es una funcionalidad que quedó a medio implementar. No afecta en nada al sistema y está ahí de forma provisoria. Más adelante se va a eliminar o integrar bien con un sistema de autenticación.-

Instrucciones para ejecutarlo:

Clonar el repositorio
git clone https://github.com/joacoxr1/Parcial1-Prog3-RodriguezJoaquin.git
cd Parcial1-Prog3-RodriguezJoaquin

Instalar pnpm (si no está instalado)
npm install -g pnpm

Instalar dependencias
pnpm install

Ejecutar el proyecto
pnpm dev

Abrir en el navegador la URL que te muestre la terminal (por defecto http://localhost:5173)