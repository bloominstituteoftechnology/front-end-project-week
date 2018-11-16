import React from 'react';
import styled from 'styled-components';
import ListView from './ListView.js'
import { Route } from 'react-router-dom';

const MainContentContainer = styled.div`
    display: table-cell;
    width: 80%;
    vertical-align: top;
    padding-left: 30px;
`

const MainContent = props => {
    return (
        <MainContentContainer>
            <Route 
                path='/' 
                exact
                render={props => 
                    <ListView props={props}/>
                } 
            />
        </MainContentContainer>
    )
}

export default MainContent;