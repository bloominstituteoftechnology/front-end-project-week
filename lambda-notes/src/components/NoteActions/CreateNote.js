import React from 'react';
import styled from 'styled-components';
import { Route, NavLink, Link } from 'react-router-dom';

const Create = styled.div`
// display: inline-block;
// background: #f2f1f2;
// height: 100vh;
// height: 100%;
// width: 100%;
`

const Header = styled.h2`

`

const NoteTitle = styled.input`
font-size: 1.5;
padding: 0.25rem 0.75rem;
margin-bottom: 1rem;
border-radius: 0.2rem;
border: 1px solid #B2B2B2
`

const NewNote = styled.textarea`
resize: none;
font-size: 1.5;
margin-bottom: 1rem;
border-radius: 0.2rem;
border: 1px solid #B2B2B2
`

const AddNote = styled.button`

`

const CreateNote = (props) => {
    console.log(props)
    return (<Create>

        <Header>Create New Note:</Header>

        <form onSubmit={props.addNote}>
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
        </form>
    </Create>);
}

export default CreateNote;