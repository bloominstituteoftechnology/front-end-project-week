import React from 'react';
import './index.css';
import NotesList from '../NotesList/NotesList';
import NotesView from '../NotesView/NotesView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import {Route, Switch} from 'react-router-dom';


class MainContent extends React.Component {
    render() {
        return (
         <div className='main-container'>
           <CreateNote />
         </div>
        );
    }
}

export default MainContent;