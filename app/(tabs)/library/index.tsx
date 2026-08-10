import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { libraryData } from "../../../data/libraryData";
import { book } from "../../../models/book";
import { globalStyles } from "../../../styles/globalStyles";

export default function LibraryScreen() {
  // Router para navegar al detalle
  const router = useRouter();

  // Elemento de la lista
  const bookItem = ({ item }: { item: book }) => (
    <Pressable
      style={globalStyles.bookCard}
      onPress={() => {
        // Navega al detalle del libro
        router.push({
          pathname: "/library/[id]",
          params: { id: item.id },
        });
      }}
    >
      {/* Muestra la información del libro en la tarjeta */}
      <Text style={globalStyles.bookTitle}>{item.title}</Text>
      <Text style={globalStyles.bookAuthor}>{item.author}</Text>
      <Text style={globalStyles.bookInfo}>
        {item.publisher} · {item.year}
      </Text>
      <Text style={globalStyles.bookInfo}>{item.genre}</Text>
    </Pressable>
  );

  return (
    <View style={globalStyles.container}>
      <Image
        source={require("../../../assets/images/library.png")}
        style={globalStyles.libraryImage}
      />

      <Text style={globalStyles.subtitle}>
        {libraryData.length} libros disponibles
      </Text>

      {/* Lista de libros */}
      <FlatList
        data={libraryData}
        keyExtractor={(item) => item.id}
        renderItem={bookItem}
      />
    </View>
  );
}