import { Product } from "@/interfaces/product.interface";
import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

interface Props {
  product: Product | undefined;
}

export default function ProductItem({ product }: Props) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: product?.title });
  }, [navigation, product]);

  if (!product) {
    return (
      <View className="flex h-full items-center justify-center px-4">
        <Text className="text-xl font-bold mb-2">Producto no encontrado</Text>
        <Text className="text-gray-500 mb-4 text-center">
          El producto que buscas no existe o fue eliminado.
        </Text>

        <Link href="/" className="text-primary font-bold">
          Volver al inicio
        </Link>
      </View>
    );
  }

  return (
    <View className="flex gap-4 p-4">
      <Text className="text-3xl text-primary font-bold">{product.title}</Text>

      <Text className="text-lg">{product.description}</Text>

      <Text className="text-tertiary font-bold text-xl">${product.price}</Text>
    </View>
  );
}
