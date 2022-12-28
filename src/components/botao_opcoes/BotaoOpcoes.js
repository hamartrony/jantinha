import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width / 6;

export default function BotaoOpcoes({ tittle, icon, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(`${tittle}`)}>
        <Text>{tittle}</Text>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 65,
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
