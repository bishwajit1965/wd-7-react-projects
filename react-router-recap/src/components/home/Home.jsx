import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const tShirts = useLoaderData();
  const { _id, name, price, picture, gender } = tShirts;
  return (
    <div className="shop-cart-container-wrapper">
      <div className="shop-container">shop</div>
      <div className="cart-container">cart</div>
    </div>
  );
};

export default Home;
