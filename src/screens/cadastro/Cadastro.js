import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import ScreenDefault from "../screen_default/ScreenDefault";

export default function Cadastro({ route, navigation }) {
  const [user, setUser] = useState(route.params ? route.params : {});
  return (
    <ScreenDefault navigation={navigation}>
      <Text style={styles.tittle}>Novo Por Aqui?</Text>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Icon name="people" size={40} />

          <TextInput
            style={styles.input}
            onChangeText={(name) => setUser({ ...user, name })}
            placeholder="Nome do Usuário"
            value={user.name}
          />
        </View>
        <View style={styles.fields}>
          <Icon name="mail" size={40} />

          <TextInput
            style={styles.input}
            onChangeText={(email) => setUser({ ...user, email })}
            placeholder="E-mail"
            value={user.email}
          />
        </View>
        <View style={styles.fields}>
          <Icon name="lock" size={40} />

          <TextInput
            style={styles.input}
            onChangeText={(address) => setUser({ ...user, password })}
            placeholder="Senha"
            value={user.password}
          />
        </View>
        <View style={styles.fields}>
          <Icon name="lock" size={40} />

          <TextInput
            style={styles.input}
            onChangeText={(address) => setUser({ ...user, password })}
            placeholder="Confirme a Senha"
            value={user.password}
          />
        </View>
      </View>
      <View style={styles.area}>
        <Button title="Salvar" style={styles.button} />
        <Button
          title="Cancelar"
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScreenDefault>
  );
}

const styles = StyleSheet.create({
  tittle: {
    fontSize: 30,
    fontWeight: "800",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 15,
  },
  form: {
    width: "95%",
    height: "auto",
    alignItems: "center",
  },
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
  area: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: "pink",
  },
});
