import "./App.css";
import React from "react";
import { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from './components/TodoItem/TodoItem';


function App(){
  const [todos, setTodos] = useState([
    {text:"Learn React Js",isCompleted:false},
    {text:"Learn git",isCompleted:false},
    {text:"Build really cool todo app",isCompleted:false}
  ])

  const addTodo = (text) => {
    const newTodos = [...todos,{text}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
      <h1>My todo list</h1>
      {todos.map((todo,index) => (
              <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} removeTodo={removeTodo}/>
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
    </div>
  )
}
export default App;