import React, { Component } from 'react';
import NoteList from './NoteList';
import AddNote from './AddNote';
import { Route } from 'react-router-dom';

class NoteContent extends Component {
    render() {
        return(
            <div className='col-12'>
                <Route exact path='/' component={NoteList} />
                <Route path='/addNote' component={AddNote} />
            </div>
        )
    }
}

export default NoteContent;