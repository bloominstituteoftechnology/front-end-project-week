import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';
import NoteForm from '../components/NoteForm';

const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    color: ${styleVars.pageHeaderColor};
`;

const Div = styled.div`
    margin-left: 4px;
`;

const AddNote = props => {
    return (
        <Div>
            <H1>Create New Note:</H1>
            <NoteForm post={props.post} />
        </Div>
    );
};

export default AddNote;
