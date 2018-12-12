import React from 'react';
import styled from 'styled-components';


const NoteForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 125px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`
const TitleInput = styled.input`
    width: 50%;
    margin-bottom: 15px;
    height: 35px;
    padding-left: 10px;
    border-radius: 4px;
    border: 1px solid #C5C5C5;
    font-family: 'Open Sans', sans-serif;
    :focus{
        outline: none;
    }
    ::placeholder{
        font-family: 'Open Sans', sans-serif;
    }
`
const TextInput = styled.textarea`
    width: 95%;
    border: 1px solid #C5C5C5;
    border-radius: 4px;
    padding-left: 10px;
    padding-top: 10px;
    font-family: 'Open Sans', sans-serif;
    :focus{
        outline: none;
    }
    ::placeholder{
        font-family: 'Open Sans', sans-serif;
    }
`
const SubmitButton = styled.button`
    width: 25%;
    margin-top: 30px;
    background-color:#2bc1c4;
    border: 1px solid #979797;
    color: #FFFFFF;
    height: 40px;
    font-size: 25px;
    
`
const EditNoteForm = (props) => {
    return (
        <NoteForm onSubmit={props.submitHandler}>
            <TitleInput
                value={props.title}
                onChange={props.inputHandler}
                name='title'
                placeholder='note title'
            />
            <TextInput
                value={props.textInput}
                onChange={props.inputHandler}
                name='textInput'
                placeholder='Note Comment'
                rows='20' />
            <SubmitButton>Save</SubmitButton>
        </NoteForm>
    )

}

export default EditNoteForm