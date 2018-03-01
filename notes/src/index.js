import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

import Nav from './Components/nav';
import AllNotes from './Components/AllNotes';
import AddNote from './Components/AddNote';
import App from './App';
import './index.css';


ReactDOM.render(
    <Router>
        <div className="App">
            <div className="nav_rail">
                <div className="title">
                    <div>Lambda</div>
                    <div>Notes</div>
                </div>

                <div>
                    <button >
                        <NavLink to="/" exact>
                            View Your Notes
                            </NavLink>
                    </button>
                </div>
                <div>
                    <button >
                        <NavLink to="/AddNote" exact>
                            + Create New Note
    </NavLink>
                    </button>
                    </div>
                    <Route path to="/" exact component={App} />
                    <Route path to="/AddNote" exact component={AddNote} />
                </div>
                </div>
    </Router >,
        
        
            document.getElementById('root')
);