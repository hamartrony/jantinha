import { Button, Text, View } from "react-native";
import Head from "../../components/header";

export default function Bebida({ navigation }) {
  return (
    <View>
      <Head />
      <Text>Tela de Bebidas</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
