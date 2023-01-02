import { useContext } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import CartContext from "../../context/CartContext";
import icone from "../../images/vitaoLogo.jpg";
const screenWidth = Dimensions.get("window").width;

export default function CardProduto({ tittle, description, price, img, prod }) {
  const { cart, addCart, delCart } = useContext(CartContext);

  function cartOptions(item) {
    //console.log(item);
    return (
      <>
        <Button
          onPress={() => addCart(item)}
          icon={<Icon name="add" size={20} color="green" />}
        />
        {/*<Text style={styles.text_cart}>2</Text>*/}
        <Button
          onPress={() => delCart(item)}
          icon={<Icon name="remove" size={20} color="red" />}
        ></Button>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.tittle}>{tittle}</Text>
        <Text style={styles.desc}>{description}</Text>
        <View style={styles.price_cart}>
          <Text style={styles.price}>R${parseFloat(price).toFixed(2)}</Text>
          <View style={styles.cartarea}>{cartOptions(prod)}</View>
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
    fontSize: 25,
    alignSelf: "center",
  },
});
