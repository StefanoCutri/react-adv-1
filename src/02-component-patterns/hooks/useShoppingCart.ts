import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCardChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setshoppingCart((prevShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prevShoppingCart;
        return rest;
      }

      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    shoppingCart,
    onProductCardChange,
  };
};
