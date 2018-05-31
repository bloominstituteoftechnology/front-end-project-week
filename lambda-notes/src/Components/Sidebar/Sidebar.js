import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import NoteContainer from '../NoteContainer/NoteContainer';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className = "sidebar-wrapper">
                        <h1 className = "nav-header">
                        <Link to="/notes" component={NoteContainer}className="home-link">Lambda <br/>Notes</Link></h1>             
                        <button className = "button-view">
                            <Link to="/notes" component={NoteContainer}className="link">
                                <div className = "link">View Your Notes</div>
                            </Link>
                        </button>
                        <button className = "button-create">
                            <Link to="/notes/create" component={CreateNote} className="link">
                                <div className="link">+ Create a New Note</div>
                            </Link>
                        </button>
            </div>
        );
    }
}

export default Sidebar;
