import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import NoteContainer from '../NoteContainer/NoteContainer';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className = "sidebar-wrapper">
                    <h1 className = "app-header">
                        Lambda <br/>Notes</h1>               
                        <button className = "button-view">
                            <Link to="/notes" component={NoteContainer}>
                                <div>View Your Notes</div>
                            </Link>
                        </button>
                        <button className = "button-create">
                            <Link to="/notes/create" component={CreateNote}>
                                + Create a New Note
                            </Link>
                        </button>
            </div>
        );
    }
}

export default Sidebar;
