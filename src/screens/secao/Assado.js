import { Button, Text, View } from "react-native";
import Head from "../../components/header";

export default function Assado({ navigation }) {
  return (
    <View>
      <Head />
      <Text>Tela de Assados</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
