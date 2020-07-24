import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
    console.log(todos);
  };
  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      {/* {JSON.stringify(todos)} */}
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
