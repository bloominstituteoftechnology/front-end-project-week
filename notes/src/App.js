import { NotesDefaultSource } from './components/NotesDefaultSource';
import React, { Component } from 'react';

export default class App extends Component {
    state = {
    };

    render() {
        return (
            <div>
                <NotesDefaultSource Notes={this.state} />
            </div>
        )
    }
}

