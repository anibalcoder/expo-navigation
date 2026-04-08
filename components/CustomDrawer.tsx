import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

const CustomDrawer = ({ ...props }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View className="bg-primary rounded-xl h-32 flex justify-center items-center mb-8">
        <Text className="bg-white text-2xl rounded-full font-bold p-4">AN</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
