import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductsListPage } from "./pages/ProductsListPage";
import { ProductFormPage } from "./pages/ProductFormPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { AboutFrancoColapintoPage } from "./pages/AboutFrancoColapintoPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className='flex-grow flex items-center justify-center'>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/t-shirt' element={<ProductsListPage category="t-shirt" />} />
            <Route path='/accesory' element={<ProductsListPage category="accesory" />} />
            <Route path='/products' element={<ProductsListPage />} />
            <Route path='/about-franco-colapinto' element={<AboutFrancoColapintoPage />} />
            <Route path='/product-details/:id' element={<ProductDetailsPage />} />

            {/* Rutas protegidas */}
            <Route
              path='/product-create'
              element={
                <PrivateRoute>
                  <ProductFormPage />
                </PrivateRoute>
              }  
            />
            <Route 
              path='/product/:id'
              element={
                <PrivateRoute>
                  <ProductFormPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App