import React, { useState } from "react";
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

const useSelect = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};

const MyForm = () => {
  const name = useInput("");
  const password = useInput("");
  const email = useInput("");
  const check = useCheck();
  const select = useSelect();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      name.value,
      password.value,
      email.value,
      check.checked,
      select.value
    );
  };

  return (
    <form onSubmit={handleSubmit} className="App-contain">
      <input {...name} />
      <input {...password} />
      <div>
        <input {...email} />
        <input {...check} />
      </div>
      <div>
        <select {...select}>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
        </select>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default MyForm;
