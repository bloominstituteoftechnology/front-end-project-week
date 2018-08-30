import React, { Component } from 'react';
import './index.css';
import '../NotesList/NotesList';
import NotesList from '../NotesList/NotesList';

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='main_container'>
            <NotesList />
            </div>
         );
    }
}
 
export default MainContent;