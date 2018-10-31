import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    
    return (
        <ol className="listContainer" type="1">
            {props.taskData.map((item, index) => {
              
                return (
                    <Todo 
                    key={item.id} 
                    taskItem={item} 
                    taskIndex={index}
                    changeBool={props.changeBool}
                        />
                   
                )
            })}
             
        </ol>
    )
}

export default TodoList;