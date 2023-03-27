import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";

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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Products;
