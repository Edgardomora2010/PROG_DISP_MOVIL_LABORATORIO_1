import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
  
  <Drawer
  screenOptions={{
    drawerContentStyle: {
      backgroundColor: "#F3EBDD",
    },
    drawerActiveBackgroundColor: "#A8B5A2",
    drawerActiveTintColor: "#FFFFFF",
    drawerInactiveTintColor: "#5C4635",
  }}
>

      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
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