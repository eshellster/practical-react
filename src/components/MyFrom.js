import React, { useState, useEffect } from "react";
const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const useCheck = () => {
  const [state, setState] = useState(false);
  const onChange = (e) => {
    setState(e.target.value);
  };
  return { state, onChange };
};

const MyFrom = () => {
  const name = useInput("");
  const password = useInput("");
  const email = useInput("");
  const check = useCheck();

  const [remember, setRemember] = useState(false);

  const handleCheck = (e) => {
    setRemember(e.target.checked);
    console.log(e.target.checked);
  };

  return (
    <div className="App-contain">
      <input {...name} />
      <input {...password} />
      <input {...email} />
      <input type="checkbox" checked={remember} onChange={handleCheck} />
      {remember ? "true" : "false"}
    </div>
  );
};

export default MyFrom;
