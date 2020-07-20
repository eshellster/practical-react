import React from "react";

export default (props) => {
  return <footer className="App-footer">{props.text}</footer>;
};

export const FooterAdd = (props) => {
  return <div>{props.text}</div>;
};
