import React, { Component } from 'react';


const Todo = props => {
    return (
        <div>
            {props.dummyData.map ((item) => {
            return (
                <div>
                    {item}
                </div>
            );
            })}
        </div>
        );
}

export default Todo;