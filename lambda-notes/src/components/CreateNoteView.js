import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { SideBar} from './SideBar';
import  CreateNote from './CreateNote';
import styled from 'styled-components';

const List = styled.div`

    display: flex;
`;

 const CreateNoteView = (props) => (
    <List > 
    <SideBar />
    <div>
        <CreateNote 
           title={props.title}
           body={props.body}
           handleNoteChange={props.handleNoteChange}
           handleAddNote={props.handleAddNote}
           
        />
        
        </div>
        </List>);

export default CreateNoteView

// createNote = e => {
//     e.preventDefault();
//     const notes = this.state.notes.slice();
//     notes.push({ notetitle: this.state.note, notebod: this.state.note,  id: Date.now() });
//     this.setState({ notes, note: '' });
//   };

//   changeNote = e => this.setState({ [e.target.name]: e.target.value });