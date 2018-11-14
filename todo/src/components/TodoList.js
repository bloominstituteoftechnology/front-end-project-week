import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return ( 
        <ul>
            {props.todolist.map(newToDo => {
                return (
                    <Todo 
                        key={newToDo.id}
                        value={newToDo}
                        handleClick={props.handleClick}
                        />
                )
            })}
        </ul>
    )
}

export default TodoList;