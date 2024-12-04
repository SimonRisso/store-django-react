import { useState } from "react";
import { Link } from "react-router-dom";

export function NavLinks() {
    const [heading, setHeading] = useState("");
    const links = [
        {
            name: "Categorías",
            submenu: true,
            sublinks: [
                {
                    Head: "Remeras",
                    link: "/t-shirt"
                },
                {
                    Head: "Accesorios",
                    link: "/accesory"
                },
                {
                    Head: "Gorras",
                    link: "/cap"
                }
                
            ]
        },
        {
            name: "Información",
            submenu: true,
            sublinks: [
                {
                    Head: "Quienes somos",
                    link: "/"
                },
                {
                    Head: "Métodos de pagos",
                    link: "/paymethods"
                }
            ]
        }
    ];

    return (
        <>
            {links.map((link, index) => (
                <div key={index} className="relative">
                    <div className="px-3 text-left md:cursor-pointer group">
                        <h1 
                            className="text-neutral-800 hover:text-blue-700 py-7 flex justify-between items-center md:pr-0 pr-5 group" 
                            onClick={() => heading !== link.name ? setHeading(link.name) : setHeading("")}
                        >
                            {link.name}

                            {/* Mobile */}

                            <span className="text-xl md:hidden inline">
                                <ion-icon 
                                    name={`${heading === link.name ? "chevron-up" : "chevron-down"}`}>
                                </ion-icon>
                            </span>
                    
                            <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                                <ion-icon 
                                    name="chevron-down">
                                </ion-icon>
                            </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className="absolute top-full left-0 hidden group-hover:md:block hover:md:block shadow-lg bg-white rounded-lg z-10">
                                    <div className="p-4">
                                        {link.sublinks.map((mysublink, index) => (
                                            <div key={index} className="py-2">
                                                <h1 className="text-neutral-800 text-base font-normal">
                                                    <Link to={mysublink.link || '#'} className="hover:text-blue-700">
                                                        {mysublink.Head}
                                                    </Link>
                                                </h1>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Mobile menu */}
                                <div className={`
                                    ${heading === link.name ? 'md:hidden' : 'hidden'}
                                    `}>
                                    {
                                        link.sublinks.map((slink, index) => (
                                            <div key={index}>
                                                <h1 className="text-neutral-800 py-3 pl-7 font-semibold md:pr-0 pr-5">
                                                    <Link to={slink.link} className="hover:text-blue-700">
                                                        {slink.Head}
                                                    </Link>
                                                </h1>  
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};