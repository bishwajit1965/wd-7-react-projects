import React from "react";
import { useContext } from "react";
import { MoneyContext } from "../grandpa/GrandPa";

const Sister = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h2>Sister</h2>
      <p>
        <small>Grandpa money: {money}</small>
      </p>
    </div>
  );
};

export default Sister;
