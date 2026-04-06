import { tabScreens } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const Tabslayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarStyle: {
          backgroundColor: "#000",
        },
        tabBarActiveBackgroundColor: "#FFF",
      }}
    >
      {tabScreens.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: tab.headerShown,
            tabBarIcon: ({ color }) => (
              <Ionicons size={24} name={tab.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default Tabslayout;
