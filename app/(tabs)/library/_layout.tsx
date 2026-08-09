import { Stack } from "expo-router";

export default function LibraryStackLayout() {
 
  /* Configuramos el stack de navegación para la sección de biblioteca */
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      /* Agregamos la pantalla de detalle del libro al stack de navegación */
      <Stack.Screen
        name="[id]"
        options={{
          title: "Detalle del libro",
        }}
      />
    </Stack>
  );
}