import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../utilities/fakedb";
import "./Products.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

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

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
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
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <div className="bg-amber-500 rounded-md mt-5 flex justify-between items-center p-2">
            <div className="text-white block">
              <p>Review orders</p>
            </div>
            <Link
              to="/order"
              className="w-10 h-10 bg-amber-200 hover:bg-yellow-300 shadow-sm rounded-full items-center relative"
            >
              <div className="absolute bottom-1 left-2 mx-auto block cursor-pointer">
                <FontAwesomeIcon
                  className="w-5 h-5 text-red-500 hover:text-amber-700"
                  icon={faArrowAltCircleRight}
                />
              </div>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Products;
