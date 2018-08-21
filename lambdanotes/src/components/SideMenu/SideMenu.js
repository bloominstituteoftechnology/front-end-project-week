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
import NoteView from '../NoteView/NoteView';

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
                        <li><NavLink exact to="/create-new-note/" className="nav-text" activeClassName="active-component">+ Create New Note</NavLink></li>
                    </div>     
                </ul>

                <Route exact path="/" component={ListView} className="example"/>
                <Route path="/create-new-note/" component={NewNote} />
                <Route path="/:title/" component={NoteView} />
            </div>
        );
    }
}

export default SideMenu;