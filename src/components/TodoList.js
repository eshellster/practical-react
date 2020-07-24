import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
    // console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
    // console.log("todos", todos);
  };
  return (
    <div>
      <div>todos left: {todos.filter((todo) => !todo.complete).length}</div>
      <TodoForm onSubmit={addTodo} />
      {/* {JSON.stringify(todos)} */}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          toggleComplete={() => toggleComplete(todo.id)}
          text={todo.text}
          id={todo.id}
          complete={todo.complete}
        />
      ))}
    </div>
  );
};

export default TodoList;
