import React, { useState, useEffect } from "react";
const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const useCheck = () => {
  const type = "checkbox";
  const [checked, setChecked] = useState(false);
  const onChange = (e) => {
    setChecked(e.target.checked);
    console.log(checked);
  };
  return { type, checked, onChange };
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
      <input {...check} />
    </div>
  );
};

export default MyFrom;
