import React from "react";
import { useContext } from "react";
import { RingContext } from "../grandpa/GrandPa";

const Special = ({ ring }) => {
  const ornament = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <p>
        <small>Ring:{ring}</small>
      </p>
      <p>
        <small>Ornament: {ornament}</small>
      </p>
    </div>
  );
};

export default Special;
