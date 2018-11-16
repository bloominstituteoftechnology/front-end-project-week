import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import ToDoList from './ToDoList';
import './App.css';

const MainContainerDiv = styled.div`
    width: 90%;
    background-color: #F3F3F3;
    padding: 0px;
`;

const MainContainer = props => {
    return (
        <MainContainerDiv>
            <Route exact path='/' component={ ToDoList } />
			{/* <Route path='/' component={  } /> */}
        </MainContainerDiv>
    )
}

export default MainContainer;