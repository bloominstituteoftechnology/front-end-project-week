import React from 'react';
import './styles/NotesSidebar.css'
import NoteView from './NoteView';
import NoteCreate from './NoteCreate';
import {Route, Link, Switch } from 'react-router-dom';

const NotesSidebar = props => {
    return (
        <div className="NotesSidebarMain">
            <h1 className="NotesSidebarTitle">Lambda Notes</h1>
            <Link to='/'><button class="NotesSidebarButton ButtonView">View Your Notes</button></Link>
            <Link to='/add-note'><button class="NotesSidebarButton ButtonCreate">+ Create New Note</button></Link>
            <Switch>
                <Route exact path="/" component={NoteView} />
                <Route exact path="/add-note" component={NoteCreate} />
            </Switch>
        </div>
    )
}

export default NotesSidebar;