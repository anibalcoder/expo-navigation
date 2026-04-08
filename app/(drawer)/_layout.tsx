import CustomDrawer from "@/components/CustomDrawer";
import { drawerScreens } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";

const Drawerlayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      {drawerScreens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          options={{
            drawerLabel: screen.drawerLabel,
            title: screen.title,
            headerShown: screen.headerShown,
            drawerIcon: ({ color }) => (
              <Ionicons size={20} name={screen.icon} color={color} />
            ),
          }}
        />
      ))}
    </Drawer>
  );
};

export default Drawerlayout;
