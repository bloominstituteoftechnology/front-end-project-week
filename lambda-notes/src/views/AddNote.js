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

const AddNote = props => {
    console.log('add notes props:', props);
    return (
        <Div>
            {props.match.path === '/add' ? (
                <>
                    <H1>Create New Note:</H1>
                    <NoteForm
                        submit={props.post}
                        buttonText="Save"
                        match={props.match}
                    />
                </>
            ) : (
                <>
                    <H1>Edit Note:</H1>
                    <NoteForm
                        submit={props.update}
                        buttonText="Update"
                        match={props.match}
                        query={props.location.query}
                    />
                </>
            )}
        </Div>
    );
};

export default AddNote;
