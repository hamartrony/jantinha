import { createContext } from "react";

const CartContext = createContext({});
const cart = [{ nome: "hamart" }, { nome: "hanna" }];

export const CartProvider = (props) => {
  return (
    <CartContext.Provider
      value={{
        state: {
          cart,
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
