import { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import icone from "../../images/vitaoLogo.jpg";
import CartContext from "../../providers/CartContext";
const screenWidth = Dimensions.get("window").width;

export default function CardProdutoCart({
  tittle,
  description,
  price,
  img,
  quantidade,
  prod,
}) {
  const { cart, addCart, remCart } = useContext(CartContext);
  const [prodInCart, setProdInCart] = useState(false);
  //const [produto, setProduto] = useState(prod);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.tittle}>{tittle}</Text>
        <View style={styles.price_cart}>
          <Text style={styles.price}>R${parseFloat(price).toFixed(2)}</Text>
          <View style={styles.cartarea}>
            <TouchableOpacity
              style={{
                backgroundColor: "brown",
                width: "50%",
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={() => remCart(prod)}
            >
              <Text style={{ fontSize: 17, color: "white" }}>Remover</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Image source={img ? { uri: img } : icone} style={styles.img} />
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
    margin: 2,
    backgroundColor: "white",
    marginBottom: 5,
    borderRadius: 15,
    padding: 5,
  },
  info: {
    width: "70%",
    flexDirection: "column",
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
  },
  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1E90FF",
  },
  desc: {},
  price_cart: {
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartarea: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
  },
  text_cart: {
    backgroundColor: "red",
    fontSize: 25,
    alignSelf: "center",
    color: "orange",
  },
  text_cart2: {
    fontSize: 25,
    alignSelf: "center",
    color: "red",
  },
});
