import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Inicio",
        }}
      />

      <Drawer.Screen
        name="login"
        options={{
          title: "Login",
        }}
      />

      <Drawer.Screen
        name="about"
        options={{
          title: "Acerca de",
        }}
      />
    </Drawer>
  );
}