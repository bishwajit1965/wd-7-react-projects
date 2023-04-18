import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
      <div className="bg-zinc-100 p-2 mb-2 rounded-sm">
        <h2 className="text-2xl font-bold">All Categories</h2>
      </div>
      <div className="md:p-4">
        {categories.map((category) => (
          <p className="py-2" key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
