import { LogoStore } from "./LogoStore";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-white text-blue-800 pt-1 pb-5">
            <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
                {/* Redes sociales */}
                <div className="flex gap-6 mt-7">
                    <a
                        href="https://www.linkedin.com/in/simonrisso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-pink-700 text-3xl transition-transform transform hover:scale-125"
                    >
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    <a
                        href="https://www.instagram.com/simonrisso/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-700 hover:text-blue-700 text-3xl transition-transform transform hover:scale-125"
                    >
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>

                <div className="text-center w-full md:w-auto mt-7 ml-7">
                    <p className="text-sm font-poppins text-pink-800">
                        &copy; {new Date().getFullYear()} - Simón Risso. Todos los derechos reservados.
                    </p>
                    <p className="text-base font-poppins text-pink-800">
                        Contacto:
                        <a
                            href="mailto:simonrisso.e@gmail.com"
                            className="text-blue-700 hover:text-pink-800 underline ml-1"
                        >
                            simonrisso.e@gmail.com
                        </a>
                    </p>
                </div>

                <div>
                    <Link to="/" className="block w-[247.03px] h-[102px]">
                        <LogoStore className="hover:cursor-pointer" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}