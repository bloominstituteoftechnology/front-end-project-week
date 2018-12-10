import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 24.7%;
    border-right: 2px solid grey;
    padding: 28px 0 0 17px;
    line-height: 2.5rem;
`;

const H1 = styled.h1`
    margin: 0;
    font-size: 3rem;
`;

const SideBar = props => {
    return (
        <Div>
            <H1>Lambda Notes</H1>
        </Div>
    );
};

export default SideBar;
