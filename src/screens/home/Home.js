import { Image, StyleSheet, Text, View } from "react-native";
import BotaoOpcoes from "../../components/botao_opcoes/BotaoOpcoes";
import Promos from "../../components/card_promo/CardPromo";
import assado from "../../images/assado.png";
import batatas from "../../images/batatas.png";
import bebidas from "../../images/bebidas.png";
import janta from "../../images/janta.png";
import porcoes from "../../images/porcoes.png";
import ScreenDefault from "../screen_default/ScreenDefault";

//imagens tela home
import img1 from "../../images/home/img1.png";
import img2 from "../../images/home/img2.png";
import img3 from "../../images/home/img3.png";
import img4 from "../../images/home/img4.png";

const menu = [
  { id: 1, name: "Bebidas", src: bebidas },
  { id: 2, name: "Assados", src: assado },
  { id: 3, name: "Batatas", src: batatas },
  { id: 4, name: "Jantas", src: janta },
  { id: 5, name: "Porcoes", src: porcoes },
];

export default function Home({ navigation }) {
  return (
    <ScreenDefault navigation={navigation} screen={"home"}>
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

      <View>
        <Promos />

        <Text style={styles.text}>Ofertas!!!</Text>
        <View style={styles.img_home}>
          <Image source={img1} style={styles.img_home_png} />
          <Image source={img2} style={styles.img_home_png} />
          <Image source={img3} style={styles.img_home_png} />
          <Image source={img4} style={styles.img_home_png} />
        </View>
      </View>
    </ScreenDefault>
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
  img_home: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 2,
    width: "100%",
    justifyContent: "space-around",
  },
  img_home_png: {
    width: 170,
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "600",
  },
});
