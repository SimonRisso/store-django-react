import { createContext, useState, useContext, useMemo } from "react";

export const ShoppingCartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clearShoppingCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const totalAmount = useMemo(() => {
        return products.reduce((total, product) => total + Number(product.totalPrice), 0)
    }, [products]);

    const addProduct = (product, quantity, size) => {
        const productWithTotal = {
            ...product,
            quantity,
            size,
            totalPrice: product.price * quantity
        };
        setProducts((prevProducts) => [...prevProducts, productWithTotal]);
    };      

    const removeProduct = (productId) => {
        setProducts((prevProducts) => {
            return prevProducts.filter(product => product.id !== productId);
        });
    };

    const clearShoppingCart = () => setProducts([]);

    return (
        <ShoppingCartContext.Provider value={{ products, totalAmount, addProduct, removeProduct, clearShoppingCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);