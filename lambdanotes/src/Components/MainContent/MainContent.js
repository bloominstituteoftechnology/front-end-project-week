import React from 'react';
import './mainContent.css';
import NotesList from '../NotesList/NotesList';
import NoteView from '../NoteView/NoteView';
import CreateNote from '../CreateNote/CreateNote';
import EditNote from '../EditNote/EditNote';
import DeleteNote from '../DeleteNote/DeleteNote';
const MainContent = props => {
    return (
        <div className="main_container">
            <NotesList notesArray={props.notesArray} />
        </div>
    );
}

export default MainContent;