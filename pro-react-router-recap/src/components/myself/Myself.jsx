import React from "react";
import Special from "../special/Special";

const Myself = ({ ring }) => {
  return (
    <div>
      <h2>Myself</h2>
      <section className="flex">
        <Special ring={ring} />
      </section>
    </div>
  );
};

export default Myself;
