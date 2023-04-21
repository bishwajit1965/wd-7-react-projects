import React from "react";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/shared/rightNav/RightNav";

const NewsLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default NewsLayout;
