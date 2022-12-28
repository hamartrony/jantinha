import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../images/vitaoLogo.jpg";

export default function Head({ navigation, screen }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={screen ? styles.logo_home : styles.logo} />
      <Text style={screen ? styles.text_home : styles.text}>
        Jantinha Do Vitão
      </Text>
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
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logo_home: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: "center",
  },
  text_home: {
    fontSize: 30,
    alignSelf: "center",
  },
});
