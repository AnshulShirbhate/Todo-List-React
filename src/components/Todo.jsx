import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
      <div className="row py-2">
        <div className="col-sm">
          <h4>{todo.title}</h4>
          <p>{todo.description}</p>
          <button className="btn btn-danger btn-sm" onClick={() => onDelete(todo)}>
            Delete
          </button>
        </div>
      </div>
  );
}
