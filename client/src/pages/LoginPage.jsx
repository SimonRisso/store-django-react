import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { login } from "../api/auth.api";

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const { login: loginAuth } = useAuth(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await login({ username, password }); 
            const token = res.data.token; // Token devuelto por el backend
            console.log(res.data.token);

            loginAuth(token);
            setError("");
            alert("Inicio de sesión exitoso con cuenta administradora");
        } catch (err) {
            console.error(err);
            setError("Credenciales incorrectas o error en el servidor");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[65vh]">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h1 
                    className="text-center font-audiowide uppercase font-bold text-2xl tracking-wide mb-10 bg-gradient-to-r from-pink-600 to-blue-700 bg-clip-text text-transparent"
                >
                    Iniciar sesión
                </h1>
                {error && <p>{error}</p>}

                <div>
                    <label 
                        htmlFor="username"
                        className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
                    >
                        Usuario
                    </label>
                    <input
                        type="text"
                        placeholder="Ingresa tu usuario"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <div>
                    <label 
                        htmlFor="password"
                        className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-800 hover:bg-pink-700 text-white font-bold font-poppins py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 w-full"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    )
}