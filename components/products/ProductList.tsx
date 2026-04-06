import { products } from "@/stores/products.store";
import { FlatList, Text, View } from "react-native";
import CustomLink from "../CustomLink";

const ProductList = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <View className="mb-8 flex gap-y-4 px-4">
          <Text className="text-2xl font-bold text-tertiary">{item.title}</Text>
          <Text>{item.description}</Text>
          <View className="flex flex-row justify-between items-center">
            <Text className="font-bold">{item.price}</Text>
            <CustomLink
              color="transparent"
              variant="text-only"
              href={`/products/${item.id}` as any}
              className="text-primary"
            >
              Ver detalles
            </CustomLink>
          </View>
        </View>
      )}
    />
  );
};

export default ProductList;
