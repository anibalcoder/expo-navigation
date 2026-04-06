import { stackScreens } from "@/constants/stack-screens.constant";
import { Stack } from "expo-router";

const Stacklayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#FFF",
        },
      }}
    >
      {stackScreens.map((stackScreen) => {
        return (
          <Stack.Screen
            key={stackScreen.href}
            name={stackScreen.href}
            options={{
              title: stackScreen.title,
            }}
          />
        );
      })}
    </Stack>
  );
};

export default Stacklayout;
