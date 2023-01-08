// import axios from "axios";
// import { useContext, useEffect } from "react";
// import MenuContext from "./MenuContext";

// //configuração do Axios para requisição da WEB
// const axs = axios.create({
//   baseURL: "https://clientauth.anota.ai/clientauth/nm-category/v3/?pdv=true",
//   headers: {
//     authorization:
//       "eyJhbGciOiJIUzI1NiJ9.eyJpZGNsaWVudCI6IjYzODdmYmE4ZmM4YTc0NWI2NjMwMjEwNyIsImlkcGFnZSI6IjYzNzg5MTdlNDA0OGRlMDAxMWJjMGRkMSIsImxpbmtfYWNjZXNzZWQiOmZhbHNlLCJ3aGF0c2FwcCI6dHJ1ZX0.y1QsHYyeSTu7qg2xwOmOelhjfq5YrKiaub0LCgFUfDw",
//   },
// });

// export const Data = () => {
//   const { menu, setMenuWeb } = useContext(MenuContext);

//   //Busca do MENU na WEB
//   useEffect(() => {
//     axs
//       .get()
//       .then(function (response) {
//         const parseData = response.data.menu;
//         setMenuWeb(parseData);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     console.log("BUSQUEI NA WEB>>>>>>>>>>>>>>>>>>>>>>>>>");
//   }, []);

//   return <></>;
// };

// export default MenuContext;
