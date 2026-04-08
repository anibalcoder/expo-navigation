import { DrawerConfig } from "@/interfaces";

export const drawerScreens: DrawerConfig[] = [
  {
    name: "(tabs)",
    drawerLabel: "Tabs + Stack",
    title: "Inicio",
    icon: "file-tray-stacked-outline",
    headerShown: false,
  },
  {
    name: "user/index",
    drawerLabel: "User",
    title: "Usuario",
    icon: "person-circle-outline",
  },
  {
    name: "schedule/index",
    drawerLabel: "Horario",
    title: "Horario",
    icon: "document-text-outline",
  },
];
