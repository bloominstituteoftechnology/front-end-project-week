import React from 'react';
import styled from 'styled-components';
import SideNav from '../SideBar/SideNav';
import { Route, NavLink } from 'react-router-dom';
import Note from './Note';
import CreateNote from '../NoteActions/CreateNote';
import ViewNote from '../NoteActions/ViewNote';

const Notes = styled.div`
// display: flex;
// background: #f2f1f2;
// height: 100vh;
// height: 100%;
// width: 100%;
`


const NotesContainer = (props) => {
    console.log({ ...props })
    return (<Notes className='row'>
        <Route path='/' render={routerProps => <SideNav {...routerProps} addNote={props.addNote} newNote={props.newNote} noteText={props.noteText} noteName={props.noteName} />} />
        <Route exact path='/' render={routerProps => <Note {...routerProps} note={props.note} />} />
        <Route exact path='/create' render={routerProps => <CreateNote {...routerProps} addNote={props.addNote} newNote={props.newNote} noteText={props.noteText} noteName={props.noteName} />} />
        <Route path='/view/:id' render={routerProps => <ViewNote {...routerProps} delete={props.delete} note={props.note}/>} />
    </Notes>);
}

export default NotesContainer;