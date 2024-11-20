import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProductsListPage } from "./pages/ProductsListPage";
import { ProductFormPage } from "./pages/ProductFormPage";
import { AboutFrancoColapintoPage } from "./pages/AboutFrancoColapintoPage";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";
import { LogoStore } from "./components/LogoStore";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
          <Navigation />
            <Routes>
              {/* <Route path='/' element={<Navigate to='/products' />} /> */}
              <Route path='/' element={<HomePage />} />
              <Route path='/t-shirt' element={<ProductsListPage category="t-shirt"/>} />
              <Route path='/accesory' element={<ProductsListPage category="accesory"/>} />
              <Route path='/products' element={<ProductsListPage />} />
              <Route path='/about-franco-colapinto' element={<AboutFrancoColapintoPage />} />
              <Route path='/product-create' element={<ProductFormPage />} />
              <Route path='/product/:id' element={<ProductFormPage />} />
              <Route path='/logo' element={<LogoStore />} />
            </Routes>
          <Footer />
        <Toaster/>
      </div>
      </BrowserRouter>
  );
}

export default App