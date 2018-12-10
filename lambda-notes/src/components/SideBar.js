import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';

const Div = styled.div`
    height: 100vh;
    width: ${styleVars.sideBarWidth}%;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
    padding: 28px 0 0 17px;
    line-height: 2.5rem;
    background: ${styleVars.sideBarBG};
`;

const H1 = styled.h1`
    margin: 0;
    font-size: 3rem;
    color: ${styleVars.pageHeaderColor};
`;

const SideBar = props => {
    return (
        <Div>
            <H1>Lambda Notes</H1>
        </Div>
    );
};

export default SideBar;
