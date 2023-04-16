import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="text-center mt-5">
      <h1>This is home of {user.email} </h1>
    </div>
  );
};

export default Home;
