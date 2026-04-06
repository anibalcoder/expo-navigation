import ProductItem from "@/components/products/ProductItem";
import { products } from "@/stores/products.store";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const ProductScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  return <ProductItem product={product} />;
};

export default ProductScreen;
