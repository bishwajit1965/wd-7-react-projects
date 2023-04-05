import React, { useState } from "react";
import Cart from "../cart/Cart";
import "./Orders.css";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../reviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleDeleteReviewItem = (id) => {
    const remainingReviewItems = cart.filter((product) => product.id !== id);
    setCart(remainingReviewItems);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="products-cart-wrapper">
      <div className="products-list">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleDeleteReviewItem={handleDeleteReviewItem}
          />
        ))}
      </div>
      <div className="cart-container p-4 rounded-t-lg shadow-lg">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <div className="bg-amber-500 rounded-md mt-5 flex justify-between items-center p-2">
            <div className="text-white block">
              <p>Proceed Checkout</p>
            </div>
            <Link
              to="/checkout"
              className="w-10 h-10 bg-amber-200 hover:bg-yellow-300 shadow-sm rounded-full items-center relative"
            >
              <div className="absolute bottom-1 left-2 mx-auto block cursor-pointer">
                <FontAwesomeIcon
                  className="w-5 h-5 text-red-500 hover:text-amber-700"
                  icon={faCreditCard}
                />
              </div>
            </Link>
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
