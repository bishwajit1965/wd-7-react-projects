import React from "react";
import "./Header.css";
import logo from "/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-600 px-20 py-2 header">
      <div>
        <img src={logo} alt="" />
      </div>
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/order">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Header;
