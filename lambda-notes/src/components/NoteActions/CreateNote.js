import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';

const Create = styled.div`
// display: flex;
// flex-direction: column;
`

const Header = styled.h2`
margin-left: 9%;
`

const CreateForm = styled.form`
display: flex;
flex-direction: column;
margin-left: 5%;
`

const NoteTitle = styled.input`
font-size: 1.5;
padding: 0.25rem 0.75rem;
margin-bottom: 1rem;
border-radius: 0.2rem;
border: 1px solid #B2B2B2
width: 75%;
margin-left: 5%;
`

const NewNote = styled.textarea`
resize: none;
font-size: 1.5;
margin-bottom: 1rem;
border-radius: 0.2rem;
border: 1px solid #B2B2B2;
width: 115%;
margin-left: 5%;
`

const AddNote = styled.button`
background: #24b8bd;
border: 1px solid #cdcecf;
color: white;
font-weight: bold;
width: 50%;
margin-left: 5%;
`

const CreateNote = (props) => {
    console.log(props)
    return (<Create>

        <Header>Create New Note:</Header>

        <CreateForm onSubmit={props.addNote}>
            <NoteTitle
                type='text'
                placeholder='New Title'
                autoComplete='off'
                name='noteName'
                value={props.noteName}
                onChange={props.newNote}
            />
            <br />
            <NewNote
                type='text'
                placeholder='New Content'
                name='noteText'
                value={props.noteText}
                onChange={props.newNote}
                autoComplete='off'
                rows='10'
                cols='50'
            />
            <AddNote onSubmit={props.addNote}>Save</AddNote>
        </CreateForm>
    </Create>);
}

export default CreateNote;