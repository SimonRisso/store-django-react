import { useState } from "react";
import { useShoppingCart } from "../context/CartContext";
import ShoppingCart from "./ShoppingCart";

export function Cart() {
    const [showCart, setShowCart] = useState(false);
    const { products } = useShoppingCart();

    return (
        <div className="relative flex items-center">
            <button 
                className="hover:bg-pink-300/20 rounded-full p-2 text-pink-700 flex items-center gap-1"
                onClick={() => setShowCart(!showCart)}
            >
                <ion-icon name="cart" style={{ fontSize: '1.9rem' }}></ion-icon>
                <span className="bg-pink-700 p-1 text-xs text-white w-6 h-6 rounded-[50%]">
                    {products.length}
                </span>
            </button>
            { showCart && (
                <div className="absolute top-12 right-0 w-max">
                    <ShoppingCart />
                </div>
            ) }
        </div>
        
    )
}