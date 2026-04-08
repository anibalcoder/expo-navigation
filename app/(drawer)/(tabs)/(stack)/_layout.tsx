import { stackScreens } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";

const Stacklayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) return router.back();
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#FFF",
        },
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack!)}
          />
        ),
      }}
    >
      {stackScreens.map((stack) => {
        return (
          <Stack.Screen
            key={stack.href}
            name={stack.href}
            options={{
              title: stack.title,
            }}
          />
        );
      })}
    </Stack>
  );
};

export default Stacklayout;
