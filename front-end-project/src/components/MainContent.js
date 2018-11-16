import React from 'react';
import styled from 'styled-components';
import ListView from './ListView.js'

const MainContentContainer = styled.div`
    display: table-cell;
    width: 80%;
    vertical-align: top;
    padding-left: 30px;
`

const MainContent = props => {
    return (
        <MainContentContainer>
            <ListView />
        </MainContentContainer>
    )
}

export default MainContent;