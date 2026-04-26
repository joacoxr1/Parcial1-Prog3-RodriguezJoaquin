import { checkAuhtUser } from "./utils/auth";

const rutaActual = window.location.pathname;

if (rutaActual.includes("/admin/")) {
    checkAuhtUser(
        "/src/pages/auth/login/login.html", 
        "/src/pages/auth/login/login.html", 
        "admin"                             
    );
}

if (rutaActual.includes("/client/")) {
    checkAuhtUser(
        "/src/pages/auth/login/login.html",
        "/src/pages/auth/login/login.html",
        "client"
    );
}