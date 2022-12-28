import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={35} color="white" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Carrinho")}>
        <Icon name="shopping-cart" size={35} color="white" />
        <Text style={styles.text}>Carrinho</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Icon name="person" size={35} color="white" />
        <Text style={styles.text}>Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Icon name="save" size={35} color="white" />
        <Text style={styles.text}>Pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    with: "100%",
    height: 70,
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderTopColor: "white",
    backgroundColor: "brown",
    paddingTop: 5,
  },
  text: {
    color: "white",
    fontSize: 10,
    alignSelf: "center",
  },
});
