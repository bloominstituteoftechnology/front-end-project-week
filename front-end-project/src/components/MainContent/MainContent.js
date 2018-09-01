import React, { Component } from 'react';
import './index.css';
import '../NotesList/NotesList';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main_container'>
            <NoteView />
            </div>
         );
    }
}
 
export default MainContent;