import { ProductsList } from "../components/ProductsList";

export function ProductsListPage({category}) {
  return (
    <main className="flex justify-center">
      <ProductsList category={category}/>
    </main>
  )
}
