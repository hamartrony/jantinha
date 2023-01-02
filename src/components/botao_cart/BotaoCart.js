import { Button, Image, StyleSheet, View } from "react-native";

export default function BotaoCart({ icon }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => console.warn("adicionou")}>
        <Image source={icon} style={styles.icon} />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 10,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    width: 50,
    height: 50,
  },
});
