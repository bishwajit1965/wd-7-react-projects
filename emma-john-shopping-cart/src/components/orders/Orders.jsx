import React, { useState } from "react";
import Cart from "../cart/Cart";
import "./Orders.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../reviewItem/ReviewItem";
import { removeFromDb } from "../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleDeleteReviewItem = (id) => {
    const remainingReviewItems = cart.filter((product) => product.id !== id);
    setCart(remainingReviewItems);
    removeFromDb(id);
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
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
