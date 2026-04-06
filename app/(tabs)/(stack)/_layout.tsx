import { stackScreens } from "@/constants";
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
