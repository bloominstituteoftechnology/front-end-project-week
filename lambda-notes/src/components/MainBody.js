import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ListView from './ListView.js';
import CreateNewView from './CreateNewView.js';
import SingleNoteView from './SingleNoteView.js';
import EditNote from './EditNote.js'

class MainBody extends Component {
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
                <Route 
                    exact path="/" 
                    component={ListView}
                    // render={props => <ListView mainProps={this.props} />}
                />
                <Route 
                    path="/create" 
                    component={CreateNewView}
                    // render={props => <CreateNewView mainProps={this.props} />}
                />
                <Route 
                    path="/singlenote" 
                    component={SingleNoteView}
                    // render={props => <SingleNoteView mainProps={this.props} />}
                />
                <Route 
                    path="/editnote" 
                    component={EditNote}
                    // render={props => <EditNote mainProps={this.props} />}
                />
            </div>
        )
    }
}

export default MainBody;