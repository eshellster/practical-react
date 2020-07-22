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

const MyFrom = () => {
  const name = useInput("");
  const password = useInput("");
  const email = useInput("");
  const check = useCheck();
  const select = useSelect();

  const [nameError, setNameError] = useState({ pass: true, message: "" });
  const [passwordError, setPasswordError] = useState({
    pass: true,
    message: "",
  });
  const [emailError, setEmailError] = useState({ pass: true, message: "" });

  const validate = () => {
    let error = false;

    if (name.value.length < 1) {
      error = true;
      setNameError({ pass: false, message: "이름을 입력하세요" });
    }
    if (password.value.length < 1) {
      error = true;
      setPasswordError({ pass: false, message: "패스워드를 입력하세요" });
    }
    if (!email.value.includes("@")) {
      error = true;
      setEmailError({ pass: false, message: "이메일 주소가 아닙니다." });
    }
    return !error;
  };

  const handleSummit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(
        name.value,
        password.value,
        email.value,
        check.checked,
        select.value
      );
    }
  };

  return (
    <form onSubmit={handleSummit} className="App-contain">
      <input placeholder="name" {...name} />
      {nameError.pass ? null : <div>{nameError.message}</div>}
      <input placeholder="password" type="password" {...password} />
      {passwordError.pass ? null : <div>{passwordError.message}</div>}
      <div>
        <div className="row">
          <input placeholder="email" {...email} />
          {emailError.pass ? null : <div>{emailError.message}</div>}
        </div>
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
      <button type="submit">summit</button>
    </form>
  );
};

export default MyFrom;
