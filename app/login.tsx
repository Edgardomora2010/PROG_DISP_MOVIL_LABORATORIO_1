import { Image, Pressable, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

/* Pantalla de inicio de sesión */
export default function LoginScreen() {
  return (
    <View style={globalStyles.loginContainer}>
      <Image
        source={require("../assets/images/user.png")}
        style={globalStyles.libraryUser}
      />

      <Text style={globalStyles.title}>Inicio de Sesión</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Usuario"
        placeholderTextColor="#A58D78"
      />

      <TextInput
        style={globalStyles.input}
        placeholder="Contraseña"
        placeholderTextColor="#A58D78"
        secureTextEntry
      />

      <Pressable style={globalStyles.loginButton}>
        <Text style={globalStyles.loginButtonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
}