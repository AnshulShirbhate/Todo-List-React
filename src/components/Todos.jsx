import {React} from 'react';
import Todo from "./Todo";

export default function Todos(props){ 
  let todosStyles = {
    minHeight: "60vh"
  }
  return (
    <div className="container" style={todosStyles}>
      <h3 className="my-3">Todo List</h3>
      {props.todos.length > 0 ? props.todos.map((todo)=>{
        return (
          <div>
          <Todo key={todo.sno} todo={todo} onDelete={props.onDelete}/>
          <hr />
          </div>
        )
      }): <h1 className="text-center py-5">"No Work Today"</h1>}
    </div> 
  )
}
