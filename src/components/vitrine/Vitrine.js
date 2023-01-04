import { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import MenuContext from "../../providers/MenuContext";
import CardProduto from "../card_produtos/CardProdutos";

export default function Vitrine({ data, navigation }) {
  const [menu] = useState(data);
  const { addCart } = useContext(MenuContext);

  return (
    <View>
      <Button onPress={() => addCart} title="Concluir Pedido"></Button>
      <ScrollView style={styles.menu}>
        {menu.map((item) => {
          return (
            <View key={item._id}>
              <CardProduto
                prod={item}
                tittle={item.title}
                description={item.description}
                price={item.price}
                img={item.image}
                quantidade={item.qtd ? item.qtd : 1}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
