import React from 'react';
import './Style.css'


const NotesSideBar = (props) => {
    return (
        <div className = "side-bar">
            <h1>Lambda <br/>Notes </h1>

            <button>View Your Notes</button>

            <button>+Create New Note</button>
        </div>
    )
}


export default NotesSideBar;