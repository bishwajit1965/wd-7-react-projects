import React, { useEffect, useState } from "react";
import Product from "../product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">
        Total products: {products.length}
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <Product key={product._id} productsList={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
