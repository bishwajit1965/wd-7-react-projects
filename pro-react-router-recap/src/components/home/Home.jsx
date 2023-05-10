import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import TShirt from "../tshirt/TShirt";
import { useState } from "react";
import Cart from "../cart/Cart";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Home = () => {
  const shirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shirt) => {
    const existing = cart.find((ts) => ts._id === shirt._id);
    if (existing) {
      MySwal.fire({
        icon: "error",
        title: <p>Item is already added !!!</p>,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          //   MySwal.showLoading();
        },
      }).then(() => {
        // return MySwal.fire(<p>Shorthand works too</p>);
      });
    } else {
      const newCart = [...cart, shirt];
      setCart(newCart);
    }
  };

  const handleDeleteFromCart = (id) => {
    const remainingTShirt = cart.filter((tShirt) => tShirt._id !== id);
    setCart(remainingTShirt);
  };
  return (
    <div className="shop-cart-container-wrapper">
      <div className="shop-container">
        {shirts.map((shirt) => (
          <TShirt
            key={shirt._id}
            shirt={shirt}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart} />
      </div>
    </div>
  );
};

export default Home;
