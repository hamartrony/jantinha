import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (prod) => {
    setCart([...cart, prod]);
    console.log("MENUNO CARCONTEXT", cart);
  };

  const remCart = (prod) => {
    const cartFilter = cart.filter((items) => items !== prod);
    setCart(cartFilter);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, remCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
