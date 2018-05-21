import React, { Component } from 'react';
import NoteList from './NoteList.js';
import CreateNote from './CreateNote.js';

class Notesidebar extends Component{
    render(){
        return(
            <React.Fragment>
                <button> <CreateNote /></button>
                <button> <NoteList /></button>
            </React.Fragment>
                
        )
    }
}

export default Notesidebar;