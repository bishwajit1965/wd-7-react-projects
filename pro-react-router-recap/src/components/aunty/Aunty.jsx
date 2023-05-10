import React from "react";
import Cousin from "../cousin/Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin>Mina</Cousin>
        <Cousin hasFriend={true} ring={ring}>
          Pintu
        </Cousin>
      </section>
    </div>
  );
};

export default Aunty;
