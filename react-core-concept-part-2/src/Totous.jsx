import React, { use } from "react";
import Todo from "./Todo";

const Totous = ({ todoPromise }) => {
  const todos = use(todoPromise);
  return (
    <div className="box">
      <h2>All Todu {todos.length}</h2>
      {
        todos.map(todo => <Todo todo={todo} key={todo.id}></Todo>)
      }
    </div>
  );
};

export default Totous;
