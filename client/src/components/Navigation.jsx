import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { ButtonNavBar } from "./ButtonNavBar";
import { LogoStore } from "./LogoStore";
import { Cart } from "../components/Cart";



export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white relative pb-5 shadow-blue-950 shadow-lg">
        <div className="mx-auto flex items-center font-medium justify-around">
          {/* Logo */}
          <div className="md:w-auto w-full flex justify-between">
            <Link to="/" className="block w-[247.03px] h-[102px]">
              <LogoStore className="hover:cursor-pointer"/>
            </Link>
            <div className="text-3xl text-neutral-800 md:hidden z-20 relative" onClick={() => {
              setOpen(!open);
            }}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 mt-4 font-[Poppins]">
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
          <div className="mt-4">
            <Cart />
          </div>

          {/* Mobile nav */}
          <ul
            className={`md:hidden bg-white absolute w-full h-screen top-32 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
            style={{ zIndex: 10 }}
          >
            <li>
              <Link to="/products" className="py-7 px-3 inline-block">
                <h1 className="text-neutral-800 hover:text-blue-700">Productos</h1>
              </Link>
            </li>
            <NavLinks />
            <li>
              <Link to="/about-franco-colapinto" className="py-7 px-3 inline-block">
            am <h1 className="text-neutral-800 hover:text-blue-700">Sobre Franco Colapinto</h1>
              </Link>
            </li>
            <div className="py-5">
              <ButtonNavBar />
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}