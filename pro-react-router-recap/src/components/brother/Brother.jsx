import React from "react";
import { useContext } from "react";
import { RingContext } from "../grandpa/GrandPa";

const Brother = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Brother</h2>
      <p>
        <small>Ring: {ring}</small>
      </p>
    </div>
  );
};

export default Brother;
