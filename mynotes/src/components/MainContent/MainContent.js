import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList.js';
import NoteView from '../NoteView/NoteView.js';
import CreateNote from '../CreateNote/CreateNote.js';
import EditNote from '../EditNote/EditNote.js';

class MainContent extends Component {
    render() {
        return (
            <div className='main_container'>
                <NoteView />
            </div>
        );
    }
}

export default MainContent;