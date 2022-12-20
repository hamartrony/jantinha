import { StyleSheet, View } from "react-native";
import BotaoOpcoes from "../../components/botao_opcoes";
import Promo from "../../components/card_promo";
import Head from "../../components/header";
import assado from "../../images/assado.png";
import batatas from "../../images/batatas.png";
import bebidas from "../../images/bebidas.png";
import janta from "../../images/janta.png";
import porcoes from "../../images/porcoes.png";

const menu = [
  { id: 1, name: "Bebidas", src: bebidas },
  { id: 2, name: "Assados", src: assado },
  { id: 3, name: "Batatas", src: batatas },
  { id: 4, name: "Jantas", src: janta },
  { id: 5, name: "Porcoes", src: porcoes },
];

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Head />
      <View style={styles.menu}>
        {menu.map((item) => {
          return (
            <View key={item.id}>
              <BotaoOpcoes
                tittle={item.name}
                icon={item.src}
                navigation={navigation}
              />
            </View>
          );
        })}
      </View>

      <View style={styles.promo}>
        <Promo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  promo: {
    flex: 2,
  },
});
