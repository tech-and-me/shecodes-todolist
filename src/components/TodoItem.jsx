import React from "react";

function TodoItem(props){
    const { todo,by } = props;
    console.log(props);
    return (<div>
        <p>{todo}</p>
        <p>By: {by}</p>
        </div>)
}

export default TodoItem;