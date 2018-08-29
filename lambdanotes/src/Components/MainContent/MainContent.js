import React from 'react';
import './mainContent.css';
import NotesList from '../NotesList/NotesList';
const MainContent = props => {
    return (
        <div className="main_container">
            <NotesList />
        </div>
    );
}

export default MainContent;