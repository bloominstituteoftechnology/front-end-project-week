import React from 'react';

const TodoItem = props => {
    return (
        <li>
             {props.item.task}
        </li>
    )
}
export default TodoItem;