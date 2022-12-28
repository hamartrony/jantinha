import { ScrollView, StyleSheet, View } from "react-native";
import CardProduto from "../card_produtos/CardProdutos";

export default function Vitrine({ data, navigation }) {
  return (
    <View>
      <ScrollView style={styles.menu}>
        {data.map((item) => {
          return (
            <View key={item.id}>
              <CardProduto
                tittle={item.tittle}
                description={item.description}
                price={item.price}
                img={item.img}
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

    // justifyContent: "space-around",
  },
});
