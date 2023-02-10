import React from "react";

function TodoItem(props){
    const { todo } = props;
    console.log(props);
    return (<div>{todo}</div>)
}

export default TodoItem;