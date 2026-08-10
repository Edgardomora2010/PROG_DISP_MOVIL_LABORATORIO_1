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

  /* Estilos para la imagen de la biblioteca */
  libraryImage: {
  width: "100%",
  height: 180,
  borderRadius: 12,
  marginBottom: 20,
},

  libraryUser: {
  width: 300,
  height: "50%",
  borderRadius: 12,
  marginBottom: 20,
},

/* Estilos para el botón de explorar la biblioteca */
libraryButton: {
  backgroundColor: "#6B4F3A",
  paddingVertical: 13,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: "center",
  marginTop: 15,
},

/* Estilos para el texto del botón de explorar la biblioteca */
libraryButtonText: {
  color: "#F4D06F",
  fontSize: 15,
  fontWeight: "bold",
},

/* Estilos para la pantalla de inicio de sesión */
loginContainer: {
  flex: 1,
  backgroundColor: "#F5EFE6",
  padding: 25,
  justifyContent: "center",
},

/* Estilos para el título de la pantalla de inicio de sesión */
input: {
  backgroundColor: "#FFFDF8",
  borderWidth: 1,
  borderColor: "#D8C7B5",
  borderRadius: 8,
  padding: 14,
  marginBottom: 12,
  color: "#5C4033",
},

/* Estilos para el botón de inicio de sesión */
loginButton: {
  backgroundColor: "#6B4F3A",
  borderRadius: 8,
  padding: 14,
  alignItems: "center",
},

/* Estilos para el texto del botón de inicio de sesión */
loginButtonText: {
  color: "#F4D06F",
  fontSize: 16,
  fontWeight: "bold",
},

});

