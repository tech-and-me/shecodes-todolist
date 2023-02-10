import "./App.css";
import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from './components/TodoItem';


function App(){
  const [todos, setTodos] = useState([
    "Learn React Js",
    "Learn Git",
    "Build really cool todo app"
  ])

  const addTodo = (text) => {
    const newTodos = [...todos,text];
    setTodos(newTodos);
  };



  return (
    <div className="app">
      <div className="todo-list">My todo list</div>
      {
        todos.map((todo,index) => {
          let name = "Phary"
          return (
            <div>
              <TodoItem todo={todo} key={index} />
              <p>==={name}===</p>
            </div>
          )
          
        }
         
        )
      }
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}
export default App;