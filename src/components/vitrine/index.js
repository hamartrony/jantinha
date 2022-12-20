import { Button, ScrollView, StyleSheet, View } from "react-native";
import CardProduto from "../card_produtos";

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
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    // justifyContent: "space-around",
  },
});
