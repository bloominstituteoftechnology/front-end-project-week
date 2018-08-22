import React, { Component } from 'react';
import './SideMenu.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";

import ListView from '../ListView/ListView';
import NewNote from '../NewNote/NewNote';
import NewView from '../NoteView/NoteView';

class SideMenu extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div className="sidemenu-container">
                <ul className="nav-bar">
                    <div className="nav-container">
                        <h1 className="menu-title">Lambda<br/>Notes</h1>
                        <li><NavLink exact to="/" className="nav-text" activeClassName="active-component">View Your Notes</NavLink></li>
                        <li><NavLink to="/create-new-note/" className="nav-text" activeClassName="active-component">+ Create New Note</NavLink></li>
                    </div>     
                </ul>

                <Route exact path="/" component={ListView} className="example"/>
                <Route exact path="/create-new-note/" component={NewNote} />
                <Route path="/note-view/:title/" component={NewView} />
            </div>
        );
    }
}

export default SideMenu;