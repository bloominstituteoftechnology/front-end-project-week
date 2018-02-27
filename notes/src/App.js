import { NotesDefaultSource } from './components/NotesDefaultSource';
import React, { Component } from 'react';

export default class App extends Component {
    state = {
        title: '',
        body: '',
    };

    render() {
        return (
            <div>
                <NotesDefaultSource />
            </div>
        )
    }
};

