import { Dimensions, StyleSheet, View } from "react-native";
import Footer from "../../components/footer/Footer";
import Head from "../../components/header/Head";

const screenHeigt = Dimensions.get("window").height;

export default function ScreenDefault({ navigation, children, screen }) {
  return (
    <View style={styles.container}>
      <Head screen={screen} />
      {/* conteudo das screens */}
      <View style={screen ? styles.conteudo : styles.conteudo2}>
        {children}
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeigt - 120,
    //justifyContent: "space-between",
  },
  conteudo: {
    height: "84%",
  },
  conteudo2: {
    height: "89.5%",
  },
});
