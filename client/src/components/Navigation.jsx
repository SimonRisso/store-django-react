import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { LogoStore } from "./LogoStore";
import { Cart } from "../components/Cart";
import { useAuth } from "../context/AuthContext";



export function Navigation() {
  const [open, setOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);


  return (
    <header>
      <nav className="bg-white relative pb-4 md:p-0 shadow-lg">
        <div className="relative flex flex-wrap w-full justify-center items-center md:w-auto">
          <Link to="/" className="block h-28 md:w-[247.03px] md:h-[102px] md:ml-3">
            <LogoStore className="hover:cursor-pointer" />
          </Link>
          <div
            className="absolute right-0 top-0 text-3xl text-neutral-800 md:hidden z-20 "
            onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <div className="mx-auto flex items-center font-medium justify-around">
          <ul className="md:flex hidden uppercase items-center text-center  mt-4 font-[Poppins]">
            <li>
              <Link to="/products" className="py-7 px-3 inline-block">
                <h1 className="text-neutral-800 hover:text-blue-700">Productos</h1>
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/about-franco-colapinto" className="py-7 px-3 inline-block">
                <h1 className="text-neutral-800 hover:text-blue-700">Sobre Franco Colapinto</h1>
              </Link>
            </li>
          </ul>

          <div className="mt-4 hidden md:flex flex-col items-center">
            <Cart />
            <div>
              {isLoggedIn && (
                <button onClick={logout} className="m-3 text-blue-900 font-semibold">
                  Cerrar Sesión
                </button>
              )}
            </div>
          </div>


          {/* Mobile nav */}
          <ul
            className={`md:hidden bg-white fixed w-full h-full top-32 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
            style={{ zIndex: 10 }}
          >
            <li>
              <Cart />
            </li>
            <li>
              <Link to="/products" className="p-7 px-3 inline-block">
                <h1 className="text-neutral-800 hover:text-blue-700">Productos</h1>
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/about-franco-colapinto" className="py-1 px-3 inline-block">
                am <h1 className="text-neutral-800 hover:text-blue-700">Sobre Franco Colapinto</h1>
              </Link>
            </li>
            {isLoggedIn && (
              <li className="mt-12 px-3">
                <button onClick={logout} className="font-semibold text-blue-900">
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}