import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createProduct, deleteProduct, updateProduct, getProduct } from "../api/products.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function ProductFormPage() {
  
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    console.log(formData);

    try {
      if (params.id) {
        await updateProduct(params.id, formData);
        toast.success("Producto actualizado", {
          duration: 1200,
          position: "top-right",
        });
      } else {
        await createProduct(formData);
        toast.success("Producto creado", {
          duration: 1200,
          position: "top-right",
        });
      }

      navigate("/products");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al enviar el formulario");
    }
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const {data: {name, description, category, price, stock }} = await getProduct(params.id);
        setValue("name", name);
        setValue("description", description);
        setValue("category", category);
        setValue("price", price);
        setValue("stock", stock);
    }}
    loadProduct();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[75vh]">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label 
            htmlFor="name"
            className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
          >
            Nombre
          </label>
          <input 
            id="name"
            type="text"
            placeholder="Nombre del producto"
            {...register("name", { required: true })}
            className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.name && <span className="text-pink-700 text-sm font-medium mt-1 block">El nombre del producto es obligatorio</span>}
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
          >
            Descripción
          </label>
          <textarea
            id="description"
            rows="3"
            placeholder="Descripción"
            {...register("description")}
            className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
          >
            Categoría
          </label>
          <select 
            id="category"
            defaultValue="" {...register("category", { required: true })}
            className="bg-blue-400/35 text-white p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="" disabled className="bg-blue-800 text-white">Selecciona una categoría</option>
            <option value="t-shirt" className="bg-blue-800 text-white">Remera</option>
            <option value="accesory" className="bg-blue-800 text-white">Accesorio</option>
          </select>
          {errors.category && <span className="text-pink-700 text-sm font-medium mt-1 block">Selecciona una categoría</span>}
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
          >
            Precio
          </label>
          <input 
            id="price"
            type="number" 
            placeholder="Precio del producto"
            {...register("price", { required: true })}
            className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.price && <span className="text-pink-700 text-sm font-medium mt-1 block">El precio es obligatorio</span>}
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
          >
            Stock
          </label>
          <input 
            id="stock"
            type="number" 
            placeholder="Cantidad en stock"
            {...register("stock", { required: true })}
            className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          {errors.stock && <span className="text-pink-700 text-sm font-medium mt-1 block">El stock es obligatorio</span>}
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-pink-600 font-audiowide mb-2 uppercase tracking-wide"
          >
            Imagen
          </label>
          <input
            id="image"
            type="file"
            {...register("image")}
            className="bg-blue-400/35 text-white placeholder-white/50 p-3 rounded-lg block w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex justify-between gap-4">
          <button 
            type="submit"
            className="bg-blue-800 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
              {params.id ? "Editar" : "Crear producto"}
          </button>
          
        {params.id && <button onClick={async () => {
          const accepted = window.confirm("¿Estás seguro de eliminar este producto?");
          if (accepted) {
            await deleteProduct(params.id)
            toast.success("Producto eliminado", {
              duration: 1200,
              position: "top-right",
            });
            navigate("/products");
          }
        }}
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >Eliminar</button>}
        </div>
      </form>
    </div>
  );
}
