import React from "react";
import Father from "../father/Father";
import Uncle from "../uncle/Uncle";
import Aunty from "../aunty/Aunty";
import "./GrandPa.css";
import { createContext } from "react";
import { useState } from "react";
export const RingContext = createContext("golden");
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const [money, setMoney] = useState(0);

  const ring = "Diamond";
  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <p>Has money: {money} </p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring} />
            <Uncle />
            <Aunty ring={ring} />
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/** HOW TO CREATE CONTEXT AND USE IT FOR AVOIDING PROPS DRILLING
 * 1. First create a context and export it
 * 2. Create a provider and pass a value
 * 3. Use useContext() to receive the value
 *
 *
 */
