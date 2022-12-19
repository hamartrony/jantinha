import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../images/vitaoLogo.jpg";

export default function Head({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Jantinha Do Vitão</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    padding: 4,
  },
  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  text: {
    fontSize: 30,
    alignSelf: "center",
  },
});
