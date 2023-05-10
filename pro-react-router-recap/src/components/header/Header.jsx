import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About us</Link>
      <Link to="/services">Services</Link>
      <Link to="/grandpa">Grandpa</Link>
    </nav>
  );
};

export default Header;
