import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function CardProduto({ tittle, description, price, img }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.tittle}>{tittle}</Text>
        <Text style={styles.desc}>{description}</Text>
        <Text style={styles.price}>R${parseFloat(price).toFixed(2)}</Text>
      </View>

      <Image source={img} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 10,
    height: 90,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // borderColor: "red",
    // borderStyle: "solid",
    // borderWidth: 2,
    margin: 2,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 15,
    padding: 5,
  },
  info: {
    width: "70%",
    flexDirection: "column",
    // borderColor: "blue",
    // borderStyle: "solid",
    // borderWidth: 2,
    justifyContent: "space-around",
  },
  img: {
    height: "95%",
    width: "30%",
    position: "relative",
    alignSelf: "center",
    borderRadius: 7,
  },
  tittle: {
    fontSize: 18,
    // alignSelf: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E90FF",
  },
  desc: {},
});
