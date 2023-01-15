import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { AppProvider } from "./src/providers/Index";
import Cadastro from "./src/screens/cadastro/Cadastro";
import Carrinho from "./src/screens/carrinho/Carrinho";
import Home from "./src/screens/home/Home";
import Login from "./src/screens/login/Login";
import Assado from "./src/screens/secao/Assado";
import Batata from "./src/screens/secao/Batata";
import Bebida from "./src/screens/secao/Bebida";
import Janta from "./src/screens/secao/Janta";
import Porcao from "./src/screens/secao/Porcao";

const Drawer = createDrawerNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "white",
    background: "rgb(242, 242, 242)",
    card: "brown",
    text: "white",
    border: "rgb(199, 199, 204)",
    notification: "white",
  },
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Cadastro" component={Cadastro} />
          <Drawer.Screen name="Carrinho" component={Carrinho} />
          <Drawer.Screen name="Assados" component={Assado} />
          <Drawer.Screen name="Batatas" component={Batata} />
          <Drawer.Screen name="Bebidas" component={Bebida} />
          <Drawer.Screen name="Jantas" component={Janta} />
          <Drawer.Screen name="Porcoes" component={Porcao} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
