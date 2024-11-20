import imgHomePage from "../assets/img-home-page.jpg";
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const navigate = useNavigate();

    return (
        <div 
            className="relative flex items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${imgHomePage})`, // Reemplaza con la ruta de tu imagen
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <div className="absolute inset-0 bg-black opacity-70"></div>

            <div className="relative z-10 text-center">
            <button 
                className="bg-blue-800 font-audiowide text-white px-8 py-3 rounded-full font-semibold uppercase text-xl hover:bg-pink-800 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                onClick={() => {navigate("/products")}}
            >
                Empezar
            </button>
            </div>
        </div>
    );
}