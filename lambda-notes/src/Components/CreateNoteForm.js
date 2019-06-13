import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const CreateNoteFormContainerStyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    border:0px solid red;
    width:97%;
    font:Raleway Medium;
`
export const CreateNoteStyledForm = styled.form`
    display:flex;
    flex-direction:column;
`
export const CreateNoteStyledInput = styled.input`
    width: 55%;
    margin-bottom:10px;
    font:Raleway Medium;
`

export const CreateNoteStyledTextarea = styled.textarea`
    width:100%;
    height:200px;
    resize:none;
`

export const CreateNoteStyledInput2 = styled.input`
    width:100%;
    height:200px;
`

const CreateNoteStyledButton = styled.button`
    background-color: #2BC1C4;
    color: white;
    width: 190px;
    height:45px;
    font-size:16px;
    font-weight:bold;
    margin-top:15px;
    margin-bottom:15px;
`

const CreateNoteForm = props => {
    return (
        <CreateNoteFormContainerStyledDiv>
            <h2 style = {{margin:'30px 0px 15px 0px', font:'Roboto Bold', color:'#4A4A4A'}}>Create New Note:</h2>
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

            <Link to={`/`}>
                <CreateNoteStyledButton onClick={props.addNoteEntry}>
                    Save
                </CreateNoteStyledButton>   
            </Link>

        </CreateNoteFormContainerStyledDiv>
    )
}


export default CreateNoteForm;