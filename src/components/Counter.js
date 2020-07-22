import React from "react";

// props로 전달 받기

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment}> + </button>
      <div>count: {props.count}</div>
      <button onClick={props.decrement}> - </button>
    </div>
  );
};

// 직접 전달받기

export const Counter2 = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}> + </button>
      <div>count: {count}</div>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Counter;
