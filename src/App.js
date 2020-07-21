import React, { useState } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <div className="App-header">
        <div>
          <div className={visible ? "hidden" : "visble"}>
            <Counter initialCount={0} />
          </div>
          <div className={visible ? "visble" : "hidden"}>
            <ImageSlider />
          </div>
        </div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "hide" : "show"}
        </button>
      </div>
    </div>
  );
}

export default App;
