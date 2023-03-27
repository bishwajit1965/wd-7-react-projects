import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCount = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  return (
    <div>
      <p>Counter: {counter}</p>
      <button className="bg-indigo-500 text-white" onClick={handleCount}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
