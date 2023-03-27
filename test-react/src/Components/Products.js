import React from "react";

const Products = (props) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const myStyles = {
    color: "red",
  };
  return (
    <div className="products-component">
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
      <h1 style={myStyles}>Products {props.name}</h1>
      <p>Hello Bangladesh</p>
    </div>
  );
};

export default Products;
