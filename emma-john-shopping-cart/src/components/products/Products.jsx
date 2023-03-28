import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";

import Product from "../product/Product";
import { addToDb, getShoppingCart } from "../utilities/fakedb";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((prod) => prod.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    // console.log(product);
    // const newCart = [...cart, product];
    const existingCart = cart.find((pro) => pro.id === product.id);
    if (!existingCart) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      existingCart.quantity = existingCart.quantity + 1;
      const remainingCart = cart.filter((prod) => prod.id !== product.id);
      newCart = [...remainingCart, existingCart];
    }
    setCart(newCart);
    addToDb(product.id);
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
