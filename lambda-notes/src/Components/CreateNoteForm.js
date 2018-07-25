import React from 'react';
import styled from 'styled-components';

const CreateNoteFormContainerStyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    border:1px solid red;
    width:100%;
`

const CreateNoteStyledForm = styled.form`
    display:flex;
    flex-direction:column;
`

const CreateNoteForm = props => {
    return (
        <CreateNoteFormContainerStyledDiv>
            CREATE NEW NOTE:
            <CreateNoteStyledForm>
                    <input
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    onChange={props.createNoteTitleHandler}
                    value = {props.noteEntry.title}
                />
                    <input
                    type="text"
                    placeholder="Note Content"
                    name="content"
                    onChange={props.createNoteTextBodyHandler}
                    value = {props.noteEntry.textBody}
                />
            </CreateNoteStyledForm>

            <button onClick = {props.addNoteEntry}>  Save </button>
        </CreateNoteFormContainerStyledDiv>
    )
}



export default CreateNoteForm