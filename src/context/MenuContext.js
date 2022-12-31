import axios from "axios";
import { createContext, useEffect, useState } from "react";

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
  }, []);

  console.log("PROVIDER", menu);

  return (
    <MenuContext.Provider value={{ state: { menu } }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
