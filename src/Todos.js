import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  let todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="z-depth-3 card-panel light-blue" key={todo.id}>
          <span className=" white-text text-darken-2">{todo.content}</span>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="right btn blue darken-1 text-white waves-effect waves-light "
          >
            delete
            <i className="material-icons left">delete</i>
          </button>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todos left</p>
  );
  return (
    <div className="container">
      <span>{todoList}</span>
    </div>
  );
};

export default Todos;
