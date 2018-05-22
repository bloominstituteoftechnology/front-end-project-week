import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NoteList from

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        };
    }

    render() {
        <div className="notes-container">
            <Route 
            exact path="/" 
            render={props => <NoteList mainProps={this.props} />}
        />



        </div>
    }

}

export default MainBody;