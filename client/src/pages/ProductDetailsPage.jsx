import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products.api";
import { useShoppingCart } from "../context/CartContext";

export function ProductDetailsPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { products, addProduct } = useShoppingCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const [errorMessage, setErrorMessage] = useState("");

  const checkAvailableToAddCart = (productId) => {
    return Boolean(products.find(product => product.id === productId))
  };

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true);
        const { data } = await getProduct(params.id);
        setProduct(data);
      } catch (error) {
        console.error(err);
        setError("Error al cargar el producto.");
      } finally {
        setLoading(false);
      }
    }
    if (params.id) loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage("Por favor, selecciona un talle antes de agregar al carrito.");
      return;
    }
    setErrorMessage("");
    addProduct(product, quantity, selectedSize);
  }

  if (loading) return <p>Cargando...</p>
  if (error) return <p className="text-pink-700">{error}</p>
  if (!product) return <p>Producto no encontrado</p>

  const sizeAcronyms = {
    small: "S",
    medium: "M",
    large: "L",
    extra_large: "XL"
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-6">
      <div className="md:w-1/2 flex justify-end">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full max-w-md max-h-[500px] rounded-lg"
        />
      </div>

      <div className="md:w-96 flex flex-col space-y-4 ">
        <h1 className="text-3xl font-audiowide uppercase">{product.name}</h1>
        <p className="text-blue-400 font-poppins">{product.description}</p>
        <p className="text-xl font-poppins font-semibold">${product.price}</p>

        {product.sizes && product.sizes.length > 0 && (
          <div>
            <p className="font-poppins text-gray-500 mb-2">Talles disponibles:</p>
            <div className="flex gap-4">
              {product.sizes.map(({ size }) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(sizeAcronyms[size])}
                  className="bg-blue-400/35 text-white font-poppins font-semibold p-2 rounded-full w-10 focus:outline-none focus:ring-2 focus:ring-pink-600"
                >
                  {sizeAcronyms[size]}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div>
          <label 
            htmlFor="quantity-select" 
            className="block font-poppins text-gray-500 mb-2"
          >
              Cantidad:
            </label>
          <select
            id="quantity-select"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-14 p-2 rounded-lg bg-blue-800"
          >
            {[...Array(10).keys()].map((i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}

        <button
          onClick={handleAddToCart}
          disabled={checkAvailableToAddCart(product.id)}
          className="w-full bg-blue-800 hover:bg-pink-700 text-white font-bold font-poppins tracking-wide py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:bg-pink-300 disabled:cursor-not-allowed disabled:opacity-75"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}