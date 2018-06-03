import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateNote from '../CreateNote/CreateNote';
import NoteContainer from '../NoteContainer/NoteContainer';
import './Sidebar.css';

const Sidebar = () => {
        return (
            <div className = "sidebar-wrapper">
                <h1 className = "nav-header">
                <Link to="/notes" component={NoteContainer}className="home-link">Lambda <br/>Notes</Link></h1> 
                <div className="button-holder">            
                    <button className = "button-view">
                        <Link to="/notes" component={NoteContainer}className="link">
                           View Your Notes
                        </Link>
                    </button>
                    <button className = "button-create">
                        <Link to="/notes/create" component={CreateNote} className="link">
                            + Create a New Note
                        </Link>
                    </button>
                </div>
            </div>
        );
    }


export default Sidebar;
