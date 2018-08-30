import React from 'react';
import styled from 'styled-components';
import SideNav from '../SideBar/SideNav';
import { Route, NavLink } from 'react-router-dom';
import Note from './Note';
import CreateNote from '../NoteActions/CreateNote';
import ViewNote from '../NoteActions/ViewNote';
import EditNote from '../NoteActions/EditNote';
import ConfirmDelete from '../NoteActions/ConfirmDelete';

const Notes = styled.div`
// display: flex;
// background: #f2f1f2;
// height: 100vh;
// height: 100%;
// width: 100%;
background: #f2f1f2;

`


const NotesContainer = (props) => {
    console.log({ ...props })
    return (<Notes className='row'>
        <Route path='/' render={routerProps => <SideNav {...routerProps} addNote={props.addNote} newNote={props.newNote} noteText={props.noteText} noteName={props.noteName} />} />
        <Route exact path='/' render={routerProps => <Note {...routerProps} viewClick={props.viewClick} clicked={props.clicked} note={props.note} />} />
        <Route exact path='/create' render={routerProps => <CreateNote {...routerProps} addNote={props.addNote} newNote={props.newNote} noteText={props.noteText} noteName={props.noteName} />} />
        <Route path='/view/:id' render={routerProps => <ViewNote clicked={props.clicked} viewClick={props.viewClick} {...routerProps} delete={props.delete} note={props.note}/>} />
        <Route path='/view/:id/delete' render={routerProps => <ConfirmDelete {...routerProps} delete={props.delete} note={props.note} />}/>
        <Route path='/edit' render={routerProps => <EditNote {...routerProps} note={props.note} editSubmit={props.editSubmit} clicked={props.clicked} newNote={props.newNote} edit={props.delete} note={props.note} />} />
    </Notes>);
}

export default NotesContainer;