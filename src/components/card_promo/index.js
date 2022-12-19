import { StyleSheet, Text, View } from "react-native";

export default function Promo() {
  return (
    <View style={styles.container}>
      <Text>Tittle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "50%",
    backgroundColor: "red",
  },
});
