import { Drawer } from "expo-router/drawer";

export default function DrawerNavigator() {
  return (
    <Drawer>

      {/* Home screen */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Inicio",
        }}
      />

      {/* Login screen */}
      <Drawer.Screen
        name="Login"
        options={{
          title: "Login",
        }}
      />

      {/* About screen */}
      <Drawer.Screen
        name="about"
        options={{
          title: "Acerca de",
        }}
      />
    </Drawer>

  );
}