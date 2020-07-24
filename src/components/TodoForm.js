import React, { useState } from "react";
import shortid from "shortid";

const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState({ text: "" });

  const handleChange = (e) => {
    setTodo({
      id: shortid.generate(),
      text: e.target.value,
      complete: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...todo });
    setTodo({ text: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="text"
        value={todo.text}
        onChange={handleChange}
        placeholder="todo..."
      />
      <button onClick={handleSubmit}>add Todo</button>
    </form>
  );
};

export default TodoForm;
