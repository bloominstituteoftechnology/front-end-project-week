import React, { Component } from 'react';

import NoteList from './NoteList.js';
import AddNote from './addNote.js';
import ViewNote from './viewNote.js';
import EditNote from './editNote.js';
import { Route } from 'react-router-dom';

class Content extends Component {
    render() {
        return(
            <div className='col-12'>
                <Route exact path='/' component={NoteList} />
                <Route path='/addnote' component={AddNote} />
                <Route path='/viewNote' component={ViewNote} />
                <Route path='/editnote' component={EditNote} />
            </div>
        )
    }
}

export default Content;