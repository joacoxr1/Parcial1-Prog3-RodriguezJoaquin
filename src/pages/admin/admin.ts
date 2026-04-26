import { logout } from "../../utils/auth";

console.log("Acceso concedido al Panel de admin");

const btnLogout = document.getElementById("logoutButton");

if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
        e.preventDefault(); 
        logout(); 
    });
}