import CustomLink from "@/components/CustomLink";
import { View } from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex gap-y-3 p-4">
      <CustomLink href="./products" color="primary" className="text-white">
        Productos
      </CustomLink>

      <CustomLink href="./profile" color="secondary" className="text-white">
        Perfil
      </CustomLink>

      <CustomLink href="./settings" color="tertiary" className="text-white">
        Ajustes
      </CustomLink>
    </View>
  );
};

export default HomeScreen;
