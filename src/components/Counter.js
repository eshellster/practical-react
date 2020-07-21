import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  //   function handleButtonClick() {
  //     setCount(count + 1);
  //   }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={increment}> + </button>
      <div>count: {count}</div>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Counter;
