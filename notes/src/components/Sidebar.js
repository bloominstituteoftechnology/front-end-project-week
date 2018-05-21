import React from 'react';
import Button from './Button'

const SideBar = () => {
    return (
        <div className="sidebar">
            <h1>Lambda</h1>
            <h1>Notes</h1>
            <Button text="View Your Notes" id="top-button" class="main-button" />
            <Button text="+ Create New Note" class="main-button" />
        </div>
    );
}

export default SideBar