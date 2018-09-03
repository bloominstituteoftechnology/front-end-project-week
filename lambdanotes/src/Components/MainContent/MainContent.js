import React from 'react';
import './mainContent.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import { Route } from 'react-router-dom';
const MainContent = props => {
    return (
        <div className="main_container">
            <Route exact path='/' render={() => <NotesList notesArray={props.notesArray}/>} />
            <Route exact path='/note/:id' component={NoteView} />
            <Route exact path='/create' component={CreateNote} />
            <Route exact path='/edit/:id' component={EditNote} />  
        </div>
    );
}

export default MainContent;