import React from "react";
import Friend from "../friend/Friend";

const Cousin = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>{children}</small>
      </p>
      {hasFriend && <Friend ring={ring} />}
    </div>
  );
};

export default Cousin;
