import { createContext, useState } from "react";
import { Alert } from "react-native";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    //Verifica se existe o produto no carrinho
    const produto = cart.filter((items) => items === item);
    console.log("PRODUTO", produto);

    if (produto[0]) {
      Alert.alert(
        "Produto ja Adicionado",
        "Você pode alterar a quantidade no carrinho!",
        [{ text: "OK" }]
      );
    } else {
      setCart([...cart, item]);
    }
    //console.log(cart);
  };

  const delCart = (item) => {
    const cartFilter = cart.filter((items) => items !== item);
    setCart(cartFilter);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, delCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
