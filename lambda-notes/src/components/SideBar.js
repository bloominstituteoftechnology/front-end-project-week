import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import NoteView from './NoteView.js';
import CreateNewView from './CreateNewView.js';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="main-div">
                <h1>Lambda Notes</h1>
                <br />
                <div className="navigation-top">
                    <Link className="link-noteview" to="/NoteView">
                        <Button color="info" size="lg">View Notes</Button>{' '}
                    </Link>
                    <br /><br />
                    <Link className="link-createnewview" to="/CreateNewView">
                        <Button color="info" size="lg">+ Create New Note</Button>{' '}
                    </Link>
                </div>
                <div className="navigation-bottom">
                    <Route path="/NoteView" component={NoteView} />
                    <Route path="/CreateNewView" component={CreateNewView} />                    
                </div>
            </div>
        );
    }   
}

export default SideBar;