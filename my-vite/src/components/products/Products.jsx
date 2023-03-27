import React from "react";

const Products = (props) => {
  console.log(props);
  const { name, price } = props;
  return (
    <div>
      <h2 className="text-3xl">{name}</h2>
      <p>{price}</p>
    </div>
  );
};

export default Products;
