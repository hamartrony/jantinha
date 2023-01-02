import { createContext, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const delCart = (item) => {
    const cartFilter = cart.filter((items) => items.id !== item.id);
    setCart(cartFilter);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, delCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
