import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

/* Pantalla con información de la aplicación */
export default function AboutScreen() {
  return (
    <View style={globalStyles.container}>
   
      <View style={globalStyles.bookCard}>
        <Text style={globalStyles.bookInfo}>
          Sistema de gestión para una biblioteca.
        </Text>

        <Text style={globalStyles.bookInfo}>
          Laboratorio 1 - Programación para Dispositivos Móviles.
        </Text>
      </View>
    </View>
  );
}