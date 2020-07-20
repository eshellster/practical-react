import React from "react";

export default (props) => {
  return (
    <footer className="App-footer">
      {props.text}
      <FooterAdd text="FooterAdd" />
    </footer>
  );
};

export const FooterAdd = (props) => {
  return <div>{props.text}</div>;
};
