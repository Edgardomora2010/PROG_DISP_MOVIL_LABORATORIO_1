import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

/* Configuramos el stack de navegación para la sección de biblioteca */
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      /* Agregamos la pantalla de biblioteca al stack de navegación */
      <Tabs.Screen
        name="library"
        options={{
          title: "Biblioteca",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
  
}