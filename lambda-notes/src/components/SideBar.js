import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Div = styled.div`
    height: 100vh;
    width: ${styleVars.sideBarWidth}%;
    border-right: 2px solid rgba(0, 0, 0, 0.1);
    padding: 28px 0 0 17px;
    line-height: 2.5rem;
    background: ${styleVars.sideBarBG};
    display: flex;
    flex-direction: column;
`;

const H1 = styled.h1`
    margin: 2px 0 12px 0;
    font-size: 50px;
    font-weight: 700;
    color: ${styleVars.pageHeaderColor};
`;

const StyledButton = styled(Button)`
    margin: 29px 0 0 2px;
    width: 93%;
`;

const SideBar = props => {
    return (
        <Div>
            <H1>Lambda Notes</H1>
            <Link to={'/'}>
                <StyledButton text={'View Your Notes'} />
            </Link>
            <Link to={'/add'}>
                <StyledButton text={'+ Create New Note'} />
            </Link>
        </Div>
    );
};

export default SideBar;
