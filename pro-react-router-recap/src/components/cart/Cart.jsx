import React from "react";
import "./Cart";
import "./cart.css";

const Cart = ({ cart, handleDeleteFromCart }) => {
  // 1.
  let message;
  if (cart.length === 0) {
    message = <p className="blue">Please add some product.</p>;
  } else {
    message = <h4 className="green">Thanks for the purchase. </h4>;
  }
  return (
    <div>
      <h2>Order summary :{cart.length}</h2>
      {/* 2. */}
      {cart.length == 2 ? (
        <span className="purple">Thanks for buying two products!!!</span>
      ) : (
        <span className={`bold ${cart.length === 3 ? "pink" : "green"}`}>
          Will you not purchase more!!!
        </span>
      )}

      {/* 3. */}
      {cart.length === 5 && (
        <p className="black">A good purchase no doubt!!!</p>
      )}

      {/* 4. */}
      {cart.length !== 3 || (
        <p className="yellow">Buy more for 2% commission!!!</p>
      )}

      {message}

      <ol className="">
        {cart.map((cartData) => (
          <li key={cartData._id}>
            Name: {cartData.name}{" "}
            <button
              onClick={() => handleDeleteFromCart(cartData._id)}
              className="delete-btn"
            >
              X
            </button>{" "}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. Use if else to set a variable that will contain an element to show the message
 * 2. Use ternary operator to show a message on condition like if else
 * 3. Use logical and (&&) to display a variable contained or component contained message
 * 4. use logical or (||) to display a message when the given condition is false
 */

/**
 * CONDITIONAL CSS STYLING
 * 1.
 *
 */
