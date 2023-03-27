import React from "react";
import "./Header.css";
import logo from "/images/Logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 px-20 py-2">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <a href="/order">Order</a>
        <a href="/order-review">Order review</a>
        <a href="/inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </nav>
    </div>
  );
};

export default Header;
