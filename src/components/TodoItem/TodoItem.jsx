import React from "react";

import "./TodoItem.css";

function TodoItem(props){
    const { todo,index,completeTodo,removeTodo } = props;
    console.log(props);
    return (
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>{todo.text}
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
        </div>
    )
}

export default TodoItem;