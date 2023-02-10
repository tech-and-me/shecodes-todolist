import React from "react";
import TodoItem from './components/TodoItem';


function App(){
  return (
    <div>
      <h1>My todo list</h1>
      <TodoItem todo="Finish plus project." by="Phary" />
      <TodoItem todo="Feed cat." by="Rony" />
      <TodoItem todo="Be awesome." by="Kash" />
    </div>
  )
}
export default App;