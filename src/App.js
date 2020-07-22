import React, { useState } from "react";
import "./App.css";
import Counter, { Counter2 } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App-header">
      <Counter count={count} increment={increment} decrement={decrement} />
      <Counter2 count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
