import React from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Logo from "../../../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center py-8">
      <img src={Logo} alt="" className="mx-auto h-10" />
      <p>
        <small>Journalism Without Fear or Favour</small>
      </p>
      <p className="font-bold">{moment().format("LLLL")}</p>

      <div className="bg-zinc-100 p-2 md:mx-20 md:my-5 rounded-md inline-flex my-2">
        <button className="bg-red-500 hover:bg-red-700 px-4 rounded-md font-bold text-white flex items-center flex-start">
          Latest
        </button>
        <h4 className="p-2 font-bold">
          <Marquee speed={50}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </h4>
      </div>
      <div className="md:flex md:mx-20 justify-between">
        <div className=""></div>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
        </div>
        <div className="inline-flex items-center">
          <UserCircleIcon className="h-10 w-10 text-slate-600" />
          <button className="bg-slate-600 px-3 py-1 rounded-sm text-white">
            Login
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
