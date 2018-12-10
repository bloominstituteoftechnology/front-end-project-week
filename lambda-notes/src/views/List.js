import React from 'react';
import NotesList from '../components/NotesList';
import styleVars from '../helpers/styleVars';
import styled from 'styled-components';

const H1 = styled.h1`
    color: ${styleVars.pageHeaderColor};
`;

const List = props => {
    return (
        <>
            <H1>Your Notes:</H1>
            <NotesList notes={props.notes} />
        </>
    );
};

export default List;
