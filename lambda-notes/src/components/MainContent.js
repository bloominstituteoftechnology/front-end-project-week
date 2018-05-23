import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ListView from './ListView.js';
import CreateNewView from './CreateNewView.js';
import SingleNoteView from './SingleNoteView.js';
import EditNote from './EditNote.js'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }

    render() {
        return (
            <div className="route-container">
                <Route exact path="/" component={ListView} />
                <Route path="/create" component={CreateNewView} />}
                <Route path="/singlenote" component={SingleNoteView} />}
                <Route path="/editnote" component={EditNote} />}
            </div>
        )
    }
}

export default MainContent;