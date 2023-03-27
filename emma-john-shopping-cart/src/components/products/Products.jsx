import React, { useEffect, useState } from "react";

import Product from "../product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="products-container">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container p-4 rounded-t-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Order summary</h2>
        <h3 className="font-bold">
          Selected products:{" "}
          <span className="rounded-full bg-orange-600 px-2 py-2 text-slate-50  animate-pulse border-blue-300 shadow-lg">
            {cart.length}
          </span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Products;
