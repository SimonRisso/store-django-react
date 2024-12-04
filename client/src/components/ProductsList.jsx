import { useEffect, useState } from "react";
import { getAllProducts, getTShirt, getAccesory } from "../api/products.api";
import { ProductCard } from "./ProductCard";


export function ProductsList({category}) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    async function loadProducts() {
      try {
        let res;
        if (category === "t-shirt") {
          res = await getTShirt();
        } else if (category === "accesory") {
          res = await getAccesory();
        } else {
          res = await getAllProducts();
        }
        setProducts(res.data);
      } catch (error) {
        console.error("Error al cargar productos: ", error);
      }
    }
    loadProducts();
  }, [category])

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 p-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
