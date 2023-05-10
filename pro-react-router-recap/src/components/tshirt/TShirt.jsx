import React from "react";
import "./TShirt.css";

const TShirt = ({ shirt, handleAddToCart }) => {
  console.log(shirt);
  const { _id, name, price, gender, picture } = shirt;
  return (
    <div className="cart">
      <img src={picture} alt="" />
      <div className="mt-2">
        <h4>{name}</h4>
        <p>{gender}</p>
        <p>${price}</p>
      </div>
      <button onClick={() => handleAddToCart(shirt)} className="add-t-cart-btn">
        Add to cart
      </button>
    </div>
  );
};

export default TShirt;
