import React, { Component } from 'react';
import './index.css';
import '../NotesList/NotesList';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main_container'>
            <CreateNote />
            </div>
         );
    }
}
 
export default MainContent;