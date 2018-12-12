import React from 'react';
import NotesList from '../components/NotesList';
import styleVars from '../helpers/styleVars';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${styleVars.pageHeaderColor};
    margin-top: 73px;
    margin-left: 5px;
`;

const List = props => {
    console.log(props);
    return (
        <>
            <H1>Your Notes:</H1>
            <NotesList notes={props.notes} />
        </>
    );
};

export default List;
