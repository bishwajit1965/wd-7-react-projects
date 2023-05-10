import React from "react";
import Myself from "../myself/Myself";
import Brother from "../brother/Brother";
import Sister from "../sister/Sister";

const Father = ({ ring }) => {
  return (
    <div>
      <h2>Father</h2>
      <section className="flex">
        <Myself ring={ring} />
        <Brother />
        <Sister />
      </section>
    </div>
  );
};

export default Father;
