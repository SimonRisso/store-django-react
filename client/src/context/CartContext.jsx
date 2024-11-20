import { createContext, useState, useCallback, useContext, useMemo } from "react";

export const ShoppingCartContext = createContext({
    products: [],
    addProduct: () => {},
    removeProduct: () => {},
    clearShoppingCart: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const totalAmount = useMemo(() => {
        return products.reduce((total, product) => total + Number(product.price), 0)
    }, [products]);

    const addProduct = (product) => {
        setProducts((prevProducts) => [...prevProducts, product]);
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