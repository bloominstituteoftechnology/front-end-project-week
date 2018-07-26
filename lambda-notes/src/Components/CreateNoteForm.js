import React from 'react';
import styled from 'styled-components';

export const CreateNoteFormContainerStyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    border:0px solid red;
    width:97%;
`
export const CreateNoteStyledForm = styled.form`
    display:flex;
    flex-direction:column;
`
export const CreateNoteStyledInput = styled.input`
    width: 55%;
    margin-bottom:10px;
`

export const CreateNoteStyledTextarea = styled.textarea`
    width:100%;
    height:200px;
    resize:none;
`

const CreateNoteForm = props => {
    return (
        <CreateNoteFormContainerStyledDiv>
            <h2>Create New Note:</h2>
            <CreateNoteStyledForm>
                <CreateNoteStyledInput
                    type="text"
                    placeholder="Note Title"
                    name="title"
                    onChange={props.createNoteTitleHandler}
                    value={props.noteEntry.title}
                />
                <CreateNoteStyledTextarea
                    type="text"
                    placeholder="Note Content"
                    name="content"
                    onChange={props.createNoteTextBodyHandler}
                    value={props.noteEntry.textBody}
                />
            </CreateNoteStyledForm>

            <button onClick={props.addNoteEntry}>  Save </button>
        </CreateNoteFormContainerStyledDiv>
    )
}



export default CreateNoteForm;