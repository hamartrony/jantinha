import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-elements";

export default function Input({ icon }) {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <View style={styles.fields}>
      <Icon name="people" size={40} />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setUser({ ...user, name })}
        placeholder="Nome do Usuário"
        value={user.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fields: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomColor: "brown",
    borderBottomWidth: 1,
    marginBottom: 15,
    fontSize: 20,
  },
});
