import React, { Component } from 'react';
import './index.css';
import '../NotesList/NotesList';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import DeleteNote from '../DeleteNote/DeleteNote';

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