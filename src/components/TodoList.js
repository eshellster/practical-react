import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");

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

  let todoList = [];

  if (todoToShow === "all") {
    todoList = todos;
  } else if (todoToShow === "active") {
    todoList = todos.filter((todo) => !todo.complete);
  } else if (todoToShow === "complete") {
    todoList = todos.filter((todo) => todo.complete);
  }

  return (
    <div>
      <div>
        <button onClick={() => setTodoToShow("all")}>all</button>
        <button onClick={() => setTodoToShow("active")}>active</button>
        <button onClick={() => setTodoToShow("complete")}>complete</button>
      </div>
      <div>todos left: {todos.filter((todo) => !todo.complete).length}</div>
      <TodoForm onSubmit={addTodo} />
      {/* {JSON.stringify(todos)} */}

      {todoList.map((todo) => (
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
