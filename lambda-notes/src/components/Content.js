import React from 'react';
import NotesList from './NotesList';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';

const Div = styled.div`
    width: ${100 - styleVars.sideBarWidth}%;
    padding: 56px 0 0 32px;
    background: ${styleVars.mainContentBG};
`;

const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${styleVars.pageHeaderColor};
`;

const Content = props => {
    console.log(props);
    return (
        <Div>
            <H1>Your Notes:</H1>
            <NotesList notes={props.notes} />
        </Div>
    );
};

export default Content;
