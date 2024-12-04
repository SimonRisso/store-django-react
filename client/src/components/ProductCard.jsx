import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const rawRating = Math.random() * (5 - 3.5) + 3.5; 
  const formatRating = (rating) => {
    const rounded = rating.toFixed(1); 
    return rounded.replace(/\.0$/, ""); 
  };

  const rating = formatRating(rawRating);


  return (
    <div className="relative m-2 w-64 max-w-xs flex-col overflow-hidden rounded-md bg-white shadow-2xl transition-transform duration-300 hover:scale-105 p-4"
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          navigate(`/product/${product.id}`);
        }}

      >
        <img
          className="object-contain w-full h-40 rounded-md"
          style={{ maxHeight: "10rem" }}
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="mt-4 space-y-2 text-center">
        <h5 className="text-lg font-semibold font-poppins text-gray-900">{product.name}</h5>
        <p className="text-gray-600 text-sm italic">{product.category_display}</p>

        <div className="flex items-center justify-center space-x-1">
          <ion-icon name="star-half" style={{ color: 'rgb(223, 0, 177)' }}></ion-icon>
          <span className="text-sm font-semibold text-gray-900">{rating}</span>
        </div>

        <span className="text-lg font-semibold font-poppins text-blue-800">${product.price}</span>

        <div className="flex justify-between gap-4 mt-4">
          <button
            onClick={() => navigate(`/product-details/${product.id}`)}
            className="flex items-center justify-center gap-2 rounded-full border border-blue-700 px-4 py-2 text-sm font-semibold font-poppins text-blue-700 transition duration-200 ease-in-out hover:bg-blue-700 hover:text-white"
          >Ver detalles
          </button>
          {isLoggedIn && (
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex items-center justify-center gap-2 rounded-full border border-pink-500 px-4 py-2 text-sm font-semibold font-poppins text-pink-500 transition duration-200 ease-in-out hover:bg-pink-600 hover:text-white"
            >
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}