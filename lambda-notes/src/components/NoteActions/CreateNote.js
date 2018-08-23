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

const NewNote = styled.input`
// padding: 12% 20%;
`

const CreateNote = (props) => {
    console.log(props)
    return (<Create>

        <Header>Create New Note:</Header>

        <form onSubmit={props.addNote}>
            <input
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
            />
            <button onSubmit={props.addNote}>Add Note</button>
        </form>
    </Create>);
}

export default CreateNote;