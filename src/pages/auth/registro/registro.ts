import type { IUser } from "../../../types/IUser";
import { navigate } from "../../../utils/navigate";

console.log("registro.ts funcionando...");

const form = document.getElementById("form-registro") as HTMLFormElement;

if (!form) {
    console.error("Error: No se encontro el formulario de registro.");
} else {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        const usersRaw = localStorage.getItem("users");
        const users: IUser[] = usersRaw ? JSON.parse(usersRaw) : [];
        const newUser: IUser = {
            email: email,
            password: password,
            role: 'client',
            loggedIn: false
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Usuario creado...");
        navigate("/src/pages/auth/login/login.html");
    });
}