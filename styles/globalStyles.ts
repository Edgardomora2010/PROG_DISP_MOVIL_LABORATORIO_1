import { StyleSheet } from "react-native";

/* Estilos globales para la aplicación */
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
    padding: 20,
  },

  /* Estilos para la pantalla de inicio de sesión */
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5C4033",
    marginBottom: 5,
  },

  /* Estilos para la pantalla de biblioteca */
  subtitle: {
    fontSize: 15,
    color: "#8B6F5A",
    marginBottom: 20,
  },

  /* Estilos para la pantalla de detalle del libro */
  bookCard: {
    backgroundColor: "#FFFDF8",
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2D5C5",
  },

  /* Estilos para los textos dentro de la tarjeta del libro */
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5C4033",
    marginBottom: 6,
  },

  /* Estilos para el autor del libro */
  bookAuthor: {
    fontSize: 15,
    color: "#6D5141",
    marginBottom: 8,
  },

  /* Estilos para la información adicional del libro */
  bookInfo: {
    fontSize: 13,
    color: "#8B6F5A",
    marginBottom: 3,
  },
  
});