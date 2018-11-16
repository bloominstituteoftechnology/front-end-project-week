import React from 'react';
import styled from 'styled-components';

const MainContentContainer = styled.div`
    display: table-cell;
    width: 85%;
    vertical-align: top;
`

const MainContent = props => {
    return (
        <MainContentContainer>
            Test
        </MainContentContainer>
    )
}

export default MainContent;