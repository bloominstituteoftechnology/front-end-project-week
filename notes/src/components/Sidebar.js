import React from 'react';
import Button from './Button'
import { Link } from 'react-router-dom'

// SideBar component, using the previously created Btn Component

const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Link to="/"><Button text="View Your Notes" id="top-button" class="main-button" /></Link>
            <Link to="/create"><Button text="+ Create New Note" class="main-button" /></Link>
        </div>
    );
}

export default SideBar