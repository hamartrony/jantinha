import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const sendTocart = (menu) => {
    setCart(menu);
    console.log("MENUNO CARCONTEXT");
  };

  const delCart = (item) => {
    const cartFilter = cart.filter((items) => items !== item);
    setCart(cartFilter);
  };

  return (
    <CartContext.Provider value={{ cart, sendTocart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
