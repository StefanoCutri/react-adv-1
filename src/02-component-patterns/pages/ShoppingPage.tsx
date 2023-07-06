import { useState } from "react";
import { ProductCard, ProductImage, ProductButtons } from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";


export const ShoppingPage = () => {
const {onProductCardChange, shoppingCart} = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCardChange}
            value={
              shoppingCart[product.id] ? shoppingCart[product.id].count : 0
            }
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title title={"Hola Mundo"} />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
        <div className="custom-cart">
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              value={product.count}
              onChange={onProductCardChange}
            >
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title title={"Hola Mundo"} />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};
