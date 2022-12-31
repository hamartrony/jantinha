import { CartProvider } from "./CartContext";
import { MenuProvider } from "./MenuContext";

export const AppProvider = ({ children }) => {
  return (
    <MenuProvider>
      <CartProvider>{children}</CartProvider>
    </MenuProvider>
  );
};
