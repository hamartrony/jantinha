import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import ScreenDefault from "../screen_default/ScreenDefault";

import { useContext } from "react";
import BotaoOpcoes from "../../components/botao_opcoes/BotaoOpcoes";
import CardProdutoCart from "../../components/card_produtos_cart/CardProdutosCart";
import assado from "../../images/assado.png";
import batatas from "../../images/batatas.png";
import bebidas from "../../images/bebidas.png";
import janta from "../../images/janta.png";
import porcoes from "../../images/porcoes.png";
import CartContext from "../../providers/CartContext";

const menu = [
  { id: 1, name: "Bebidas", src: bebidas },
  { id: 2, name: "Assados", src: assado },
  { id: 3, name: "Batatas", src: batatas },
  { id: 4, name: "Jantas", src: janta },
  { id: 5, name: "Porcoes", src: porcoes },
];

export default function Carrinho({ navigation }) {
  const { cart } = useContext(CartContext);

  return (
    <ScreenDefault navigation={navigation}>
      {cart.length > 0 ? ( //Renderiza o carrinho cheio
        cart.map((item) => {
          return (
            <View key={item._id}>
              <CardProdutoCart
                key={item._id}
                prod={item}
                tittle={item.title}
                description={item.description}
                price={item.price}
                img={item.image}
              />
            </View>
          );
        })
      ) : (
        //Renderiza carrinho vazio
        <View style={styles.container}>
          <Text style={styles.text}>Voce ainda nao adicionou nenhum item.</Text>
          <Icon name="shopping-cart" size={80} />
          <Text style={styles.text}>Não perca a oporunidade!</Text>
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
        </View>
      )}
    </ScreenDefault>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  conteudo: {
    height: "84%",
  },
  text: {
    fontSize: 30,
    width: "80%",
    alignSelf: "center",
    fontWeight: "600",
    textAlign: "center",
  },
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
});
