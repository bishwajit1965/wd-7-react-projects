import React from "react";
import "./Home.css";
import LeftNav from "../shared/leftNav/LeftNav";
import RightNav from "../shared/rightNav/RightNav";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 md:px-20 lg:px-20 gap-4 p-2">
      <div className="md:col-span-2 p-2 border border-red-200">
        <LeftNav />
      </div>
      <div className="md:col-span-4 p-2 border border-green-200">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
        nostrum. Nulla culpa porro tempore velit facilis sapiente odio fugit
        quas quis animi perspiciatis corrupti, fugiat voluptatem dicta pariatur
        officiis consequatur.
      </div>
      <div className="md:col-span-2 p-2 border border-indigo-200">
        <RightNav />
      </div>
    </div>
  );
};

export default Home;
