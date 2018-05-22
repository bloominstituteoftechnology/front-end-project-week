import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import CreateNoteItem from '../minor/CreateNoteItem.js';
import NoteDetail from '../minor/NoteDetail.js';

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
                    path="/create" 
                    render={props => <CreateNoteItem mainProps={this.props} />}
                />
                <Route 
                    path="/note/:id" 
                    render={props => <NoteDetail {...props} mainProps={this.props} />}
                />
            </div>            
        );
    }
}

export default MainBody;