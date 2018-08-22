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
        this.state = {
            notes: [
                {
                    id: 0,
                    title: "Note 0",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                },
                {
                    id: 1,
                    title: "Note 1",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                },
                {
                    id: 2,
                    title: "Note 2",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                },
                {
                    id: 3,
                    title: "Note 3",
                    textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est eu purus tristique posuere ut et orci. Integer a."
                }
            ],
        }
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

                <Route exact path="/" render={(props) => <ListView {...props} notes={this.state.notes} />}/>
                <Route exact path="/create-new-note/" component={NewNote} />
                <Route path="/note-view/:id" render={(props) => <NoteView {...props} notes={this.state.notes} />}/>
            </div>
        );
    }
}

export default SideMenu;