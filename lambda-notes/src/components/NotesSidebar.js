import React from 'react';
import './styles/NotesSidebar.css'

const NotesSidebar = () => {
    return (
        <div className="NotesSidebarMain">
            <h1 className="NotesSidebarTitle">Lambda Notes</h1>
            <button class="NotesSidebarButton ButtonView">View Your Notes</button>
            <button class="NotesSidebarButton ButtonCreate">+ Create New Note</button>
        </div>
    )
}

export default NotesSidebar;