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

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const removeAllTodoThatAreComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
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
          handleDeleteTodo={() => handleDeleteTodo(todo.id)}
        />
      ))}
      {/* some는 인자중에 하나만 값을 만족하면 true를 반환한다.
      filter는 모든 요소를 다 확인한다. 따라서 불피요한 연산이 가중됨  */}
      {todos.some((todo) => todo.complete) ? (
        <button onClick={removeAllTodoThatAreComplete}>Delete Completed</button>
      ) : null}
    </div>
  );
};

export default TodoList;
