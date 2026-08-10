import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { libraryData } from "../../../data/libraryData";
import { globalStyles } from "../../../styles/globalStyles";

/* Pantalla con el detalle del libro */
export default function BookDetailScreen() {
  const { id } = useLocalSearchParams();

  const book = libraryData.find((item) => item.id === id);

  return (
    <View style={globalStyles.container}>

      {book && (
        <View style={globalStyles.bookCard}>
          <Text style={globalStyles.bookTitle}>{book.title}</Text>

          <Text style={globalStyles.bookAuthor}>
            {book.author}
          </Text>

          <Text style={globalStyles.bookInfo}>
            Editorial: {book.publisher}
          </Text>

          <Text style={globalStyles.bookInfo}>
            Año: {book.year}
          </Text>

          <Text style={globalStyles.bookInfo}>
            Género: {book.genre}
          </Text>
        </View>
      )}
    </View>
  );

}
