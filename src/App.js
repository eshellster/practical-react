import React, { useState } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <div>{visible ? <ImageSlider /> : <Counter initialCount={0} />}</div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide" : "show"}
      </button>
    </div>
  );
}

export default App;
