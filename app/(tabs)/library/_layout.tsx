import { Stack } from "expo-router";

export default function LibraryStackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Biblioteca",
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Detalle del libro",
        }}
      />
    </Stack>
  );
}