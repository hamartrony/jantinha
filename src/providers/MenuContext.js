import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";

//configuração do Axios para requisição da WEB
const axs = axios.create({
  baseURL: "https://clientauth.anota.ai/clientauth/nm-category/v3/?pdv=true",
  headers: {
    authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJpZGNsaWVudCI6IjYzODdmYmE4ZmM4YTc0NWI2NjMwMjEwNyIsImlkcGFnZSI6IjYzNzg5MTdlNDA0OGRlMDAxMWJjMGRkMSIsImxpbmtfYWNjZXNzZWQiOmZhbHNlLCJ3aGF0c2FwcCI6dHJ1ZX0.y1QsHYyeSTu7qg2xwOmOelhjfq5YrKiaub0LCgFUfDw",
  },
});

const MenuContext = createContext({});

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const { sendTocart } = useContext(CartContext);

  //Busca do MENU na WEB
  useEffect(() => {
    axs
      .get()
      .then(function (response) {
        const parseData = response.data.menu;
        setMenu(parseData);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("BUSQUEI NA WEB>>>>>>>>>>>>>>>>>>>>>>>>>");
  }, []);

  const addQtd = (produto) => {
    const newProd = produto;
    const menuFilter = menu.filter((items) => items !== produto);
    setMenu(menuFilter);
    const qtd = produto.qtd ? produto.qtd + 1 : 1;
    newProd.qtd = qtd;
    setMenu([...menu, newProd]);
  };

  const remQtd = (produto) => {
    const newProd = produto;
    const menuFilter = menu.filter((items) => items !== produto);
    setMenu(menuFilter);
    const qtd = produto.qtd ? produto.qtd - 1 : 0;
    newProd.qtd = qtd;
    setMenu([...menu, newProd]);
  };

  const addCart = () => {
    const menuTotal = menu.filter((produto) => produto.qtd > 0);
    const menuUnico = menuTotal.filter((v, i, a) => a.indexOf(v) === i);
    //console.log("MENUUNICOEMMENUCONTEXT", menuUnico);
    sendTocart(menuUnico);
  };

  return (
    <MenuContext.Provider value={{ menu, addQtd, remQtd, addCart }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
