import { saveUser } from "../../../utils/localStorage";
import { navigate } from "../../../utils/navigate";
import type { IUser } from "../../../types/IUser";

const rawUsers = localStorage.getItem("users");
const currentUsers: IUser[] = rawUsers ? JSON.parse(rawUsers) : [];
const adminExists = currentUsers.some(user => user.email === "admin@admin.com");

if (!adminExists) {
    currentUsers.push({
        email: "admin@admin.com",
        password: "123",
        role: "admin",
        loggedIn: false
    });
    localStorage.setItem("users", JSON.stringify(currentUsers));
}

const form = document.getElementById("form-login") as HTMLFormElement;

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = (document.getElementById("email") as HTMLInputElement).value;
        const password = (document.getElementById("password") as HTMLInputElement).value;
        const role = (document.getElementById("role") as HTMLSelectElement).value;
        const usersRaw = localStorage.getItem("users");
        const users: IUser[] = usersRaw ? JSON.parse(usersRaw) : [];
        const userFound = users.find(u => u.email === email && u.password === password);

        if (userFound) {
            if (userFound.role !== role) {
                alert(`Error: Tu cuenta es de tipo ${userFound.role}, no podes entrar como ${role}.`);
                return;
            }
            userFound.loggedIn = true;
            saveUser(userFound); 
            
            alert(`Bienvenido de nuevo, ${userFound.email}`);
            
            if (role === "admin") {
                navigate("/src/pages/admin/admin.html");
            } else {
                navigate("/src/pages/store/home/home.html");
            }

        } else {
            alert("Error: Email o contraseña incorrectos.");
        }
    });
}