import { ScrollView, StyleSheet, View } from "react-native";
import CardProduto from "../card_produtos/CardProdutos";

export default function Vitrine({ data, navigation }) {
  return (
    <View>
      <ScrollView style={styles.menu}>
        {data.map((item) => {
          return (
            <View key={item._id}>
              <CardProduto
                tittle={item.title}
                description={item.description}
                price={item.price}
                img={item.image}
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
