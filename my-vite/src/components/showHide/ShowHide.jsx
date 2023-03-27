import React, { useState } from "react";
import "./ShowHide.css";

const ShowHide = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive ? (
        <p>Hello, how are you? I love you very very much.</p>
      ) : (
        <p>Hello this is small text</p>
      )}
      {isActive ? (
        <button
          className="bg-indigo-500 text-white"
          id="show-hide-button"
          onClick={() => setIsActive(false)}
        >
          Show less
        </button>
      ) : (
        <button
          className="bg-amber-500 text-white"
          id="show-hide-button"
          onClick={() => setIsActive(true)}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default ShowHide;
