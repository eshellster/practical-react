import React from "react";

const Todo = (props) => {
  return (
    <div
      className={props.complete ? "todo-completed" : "todo-uncomplete"}
      onClick={props.toggleComplete}
    >
      {props.text}
    </div>
  );
};

export default Todo;
