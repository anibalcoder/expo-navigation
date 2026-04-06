import Ionicons from "@expo/vector-icons/Ionicons";

export interface TabConfig {
  name: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  headerShown?: boolean;
}
