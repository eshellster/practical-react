import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer, { FooterAdd } from "./components/Footer";

function App() {
  const add = (a, b) => {
    return a + b;
  };
  return (
    <div className="App">
      <Header
        title={"새로운 시작"}
        number={5}
        myObj={{ a: 5, b: 6 }}
        myArray={[100, 31, 200]}
        myFunc={add}
      />
      <Footer text="I am cool" />
      <FooterAdd text="FooterAdd" />
    </div>
  );
}

export default App;
