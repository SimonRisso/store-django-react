import { ProductsList } from "../components/ProductsList";

export function ProductsListPage({category}) {
  return (
    <main className="flex justify-center items-center flex-grow">
      <ProductsList category={category}/>
    </main>
  )
}
