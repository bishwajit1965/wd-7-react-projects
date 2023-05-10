import React from "react";
import Cousin from "../cousin/Cousin";
import { useContext } from "react";
import { MoneyContext } from "../grandpa/GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>Grandpa money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 5000)}>Send Money 5000</button>
      <section className="flex">
        <Cousin>Kumu</Cousin>
        <Cousin>Bimal</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
