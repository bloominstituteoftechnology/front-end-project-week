import React from 'react';
import styled from 'styled-components';
import styleVars from '../helpers/styleVars';
import NoteForm from '../components/NoteForm';

const H1 = styled.h1`
    font-size: 1.81rem;
    font-weight: bold;
    color: ${styleVars.pageHeaderColor};
`;

const Div = styled.div`
    margin-left: 5px;
    margin-top: 74px;
`;

const EditNote = props => {
    return (
        <Div>
            <H1>Edit Note:</H1>
            <NoteForm update={props.update} />
        </Div>
    );
};

export default EditNote;
