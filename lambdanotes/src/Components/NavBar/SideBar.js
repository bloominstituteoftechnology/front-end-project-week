import React, { Component } from 'react';
import './Bar.css';
import ViewButton from './Buttons/ViewButton';
import CreateNoteButton from './Buttons/CreateNoteButton';
class SideBar extends Component  {
    render() {
        return (
            <div className="sidebar">
                <h1>Lambda Notes</h1>
                <ViewButton />
                <CreateNoteButton />
            </div>
        );
    };
}

export default SideBar;