import Ionicons from "@expo/vector-icons/Ionicons";

export interface DrawerConfig {
  name: string;
  drawerLabel: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  headerShown?: boolean;
}
