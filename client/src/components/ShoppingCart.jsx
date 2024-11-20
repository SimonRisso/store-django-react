import { useShoppingCart } from "../context/CartContext"
import remeraFranco from "../assets/remera-franco-1.jpg";

export default function ShoppingCart(){
    const { products, removeProduct, totalAmount, clearShoppingCart } = useShoppingCart();

    if (products.length === 0) return (
        <div className=" fixed right-36 z-10 bg-white p-4 rounded-lg border shadow-lg">
            <h5 className="text-lg font-medium text-pink-800 border-b">Tu carrito está vacío.</h5>
        </div>
    );

    return (
        <div className="fixed right-36 z-10 bg-white p-4 rounded-lg border shadow-lg">
            <div className="grid gap-y-3 py-3">
                {products.map(product => (
                    <div key={product.id} className="flex gap-x-4 items-center">
                        <img src={product.image} alt="remera franco" className="w-12"/>
                        <h5 className="w-32 text-blue-800 text-ellipsis truncate font-medium">{product.name}</h5>
                        <span className="ml-auto text-blue-800">${product.price}</span>
                        <div>
                            <button 
                                className="flex items-center justify-center bg-red-600 hover:bg-red-800 text-white hover:text-slate-200 rounded-2xl p-2"
                                onClick={() => removeProduct(product.id)}
                            >
                                <ion-icon name="trash-bin"></ion-icon>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between pt-2 border-t">
                <span className="font-medium text-xl text-blue-800">Total:</span>
                <span className="font-medium text-xl text-blue-800">${totalAmount.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-900 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-950" onClick={clearShoppingCart}>Vaciar carrito</button>
        </div>
    )
}