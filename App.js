import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import Home from "./src/screens/home";
import Login from "./src/screens/login";
import Assado from "./src/screens/secao/Assado";
import Batata from "./src/screens/secao/Batata";
import Bebida from "./src/screens/secao/Bebida";
import Janta from "./src/screens/secao/Janta";
import Porcao from "./src/screens/secao/Porcao";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Assados" component={Assado} />
        <Drawer.Screen name="Batatas" component={Batata} />
        <Drawer.Screen name="Bebidas" component={Bebida} />
        <Drawer.Screen name="Jantas" component={Janta} />
        <Drawer.Screen name="Porcoes" component={Porcao} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
