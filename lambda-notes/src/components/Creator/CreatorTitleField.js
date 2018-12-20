import React from 'react';
import styled from 'styled-components';

const NoteForm = styled.form`
    width: 100%
    heightL
`;

const NoteContentInput = props => {
    return(
        <NoteForm onSubmit={props.submitNote}>
            <NoteContentInputField
                type="text"
                value={props.noteContent}
            />
        </NoteForm>
    )
}