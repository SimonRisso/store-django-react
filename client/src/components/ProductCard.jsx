import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";
import remeraImg from "../assets/remera-franco-1.jpg";


export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { products, addProduct } = useShoppingCart();

  const checkAvailableToAddCart = (productId) => {
    return Boolean(products.find(product => product.id === productId))
  };

  return (
    <div className="relative m-2 w-full max-w-xs flex-col overflow-hidden rounded-md bg-white shadow-lg shadow-blue-950 transition-transform duration-300 hover:scale-105 p-4"
    >
      <div
        className="space-y-2"
        onClick={() => {
          navigate(`/product/${product.id}`);
        }}

      >
        <img
          className="object-contain w-full h-80 border"
          src={product.image}
          alt="remera"
        />
      </div>

      <div className="mt-4">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-gray-700 text-sm italic">{product.category_display}</p>

        <div className="flex items-center space-x-1 mb-2">
          <ion-icon name="star-half" style={{ color: 'rgb(223, 0, 177)' }}></ion-icon>
          <span className="text-sm font-semibold text-gray-900">4.5</span>
        </div>

        <div className="mt-2 mb-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-pink-700 hover:shadow-lg disabled:bg-pink-300 disabled:cursor-not-allowed disabled:opacity-75"
            onClick={() => addProduct(product)}
            disabled={checkAvailableToAddCart(product.id)}
          >
            <ion-icon style={{ fontSize: '1.25rem' }} name="cart"></ion-icon>
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  )
}