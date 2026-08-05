import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View>
      <Text>Inicio de Sesión</Text>

      <TextInput
        placeholder="Usuario"
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
      />

      <Button
        title="Ingresar"
        onPress={() => {}}
      />
    </View>
  );
}