import { Slot } from "expo-router";
import { View } from "react-native";
import "./global.css";

const Rootlayout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};

export default Rootlayout;
