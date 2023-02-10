import React from "react";

import "./TodoItem.css";

function TodoItem(props){
    const { todo } = props;
    console.log(props);
    return (<div className="todo">{todo}</div>)
}

export default TodoItem;