import React from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';
import NotesView from '../NotesView/NotesView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import {Route, Switch} from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote';


class MainContent extends React.Component {
    render() {
        return (
         <div className='main-container'>
         <NotesView/>
         <DeleteNote />
         </div>
        );
    }
}

export default MainContent;