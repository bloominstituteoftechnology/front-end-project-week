import React from 'react';
import { Route, Link } from 'react-router-dom';

import NotesList from './NotesList';
import NoteAdd from './NoteAdd';
import Note from './Note';

import './App.css';
import './Sidebar.css';

const Sidebar = props => {
    return (
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to="/">
                <button className="sidebar-blue-button">View Your Notes</button>
            </Link>
            <Link to="/create">
                <button className="sidebar-blue-button">+ Create New Note</button>
            </Link>

            <Route exact path='/notes' component={NotesList} />
            <Route exact path='/addNote' component={NoteAdd} />
            <Route exact path='/notes/:id' component={Note} />
        </div>
    )
}

export default Sidebar;