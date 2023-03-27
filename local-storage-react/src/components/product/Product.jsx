import React, { useState } from "react";

import {
  removeFromShoppingCart,
  saveToCart,
  shortenText,
} from "../utilities/Utilities";

const Product = (props) => {
  const { _id, about, email, company, phone, picture } = props.productsList;
  const [isActive, setIsActive] = useState(false);

  const addToCart = (_id) => {
    saveToCart(_id);
  };
  const removeFromCart = (_id) => {
    removeFromShoppingCart(_id);
  };
  return (
    <div className="card">
      <img src={picture} alt="" className="w-full rounded-lg h-48" />
      <p>Id: {_id}</p>
      <div>
        {isActive ? (
          <p>Body: {about}</p>
        ) : (
          <p>Body: {shortenText(about, 48)}</p>
        )}
        {isActive ? (
          <button className="btn-warning" onClick={() => setIsActive(false)}>
            Show less
          </button>
        ) : (
          <button className="btn-blue" onClick={() => setIsActive(true)}>
            Show more
          </button>
        )}
      </div>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Phone: {phone}</p>

      <button className="btn-green" onClick={() => addToCart(_id)}>
        Add
      </button>
      <button className="btn-warning" onClick={() => removeFromCart(_id)}>
        Remove
      </button>
    </div>
  );
};

export default Product;
