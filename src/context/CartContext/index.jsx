import { useState, useEffect, createContext, useContext } from "react";

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addCart(item) {
        setCart([...cart, item])
        console.log(cart)
    }

    function removerItem(id) {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }

    function removeAllItem() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addCart, removerItem, removeAllItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export function UseCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("Error")
    }

    return context
}