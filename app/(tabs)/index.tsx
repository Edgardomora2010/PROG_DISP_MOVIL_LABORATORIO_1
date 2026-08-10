import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

/* Pantalla de inicio de la aplicación */
export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>
      <Image
        source={require("../../assets/images/books.png")}
        style={globalStyles.libraryImage}
      />

      <Text style={globalStyles.title}>Biblioteca Virtual</Text>

      <Text style={globalStyles.subtitle}>
        Bienvenido al sistema de gestión de biblioteca.
      </Text>

      <View style={globalStyles.bookCard}>
        <Text style={globalStyles.bookTitle}>
          Explora nuestra biblioteca
        </Text>

        <Text style={globalStyles.bookInfo}>
          Consulte el catálogo de libros utilizando la navegación.
        </Text>

        <Pressable
          style={globalStyles.libraryButton}
          onPress={() => router.push("/library")}
        >
          <Text style={globalStyles.libraryButtonText}>
            Explorar biblioteca
          </Text>
        </Pressable>
      </View>
    </View>
  );
}