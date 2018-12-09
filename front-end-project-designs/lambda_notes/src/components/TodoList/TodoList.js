import React from 'react';
import styled from 'styled-components'

import Todo from '../Todo/Todo';

const TodoListContainer = styled.div`
    background-color: #F2F1F2;
    width: 100%;
    padding: 40px;
`

const TodoList = () => {
    return (
        <TodoListContainer>
            <h2 className="lamba-notes-header">Your Notes:</h2>
            <Todo />
        </TodoListContainer>
    )
}

export default TodoList;