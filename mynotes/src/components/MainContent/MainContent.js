import React, { Component } from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList.js';
import NoteView from '../NoteView/NoteView.js';

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