import "./App.css";
import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from './components/TodoItem/TodoItem';


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
      <div className="todo-list">
      <h1 >My todo list</h1>
      {
        todos.map((todo,index) => {
          let name = "Phary"
          return (
      
              <TodoItem todo={todo} key={index} />
              // {/* <p>==={name}===</p> */}
  
          )
          
        }
         
        )
      }
      <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  )
}
export default App;