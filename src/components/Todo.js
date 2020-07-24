import React from "react";

const Todo = (props) => {
  return (
    <div className="row">
      <button onClick={props.handleDeleteTodo}>X</button>
      <div
        className={props.complete ? "todo-completed" : "todo-uncomplete"}
        onClick={props.toggleComplete}
      >
        {props.text}
      </div>
    </div>
  );
};

export default Todo;
