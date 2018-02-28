import notesDefaultSource from './components/NotesDefaultSource';
import React, { Component } from 'react';

export default class App extends Component {

    render() {
        return (
            <div>
                <notesDefaultSource>
                    <div>{notesDefaultSource}
                    </div>
                </notesDefaultSource>
                <notesDefaultSource {...this.state}>
                </notesDefaultSource>
                <notesDefaultSource {...this.state}>
                </notesDefaultSource>
                <notesDefaultSource {...this.state}>
                </notesDefaultSource>
            </div>
            
            )
        }
};

