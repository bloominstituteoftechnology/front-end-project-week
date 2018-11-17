import React, { Component } from 'react';
import Note from './Note';

class Notes extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
               {this.props.notes.map( note => <Note note={note} key={note.id} />)} 

            </div>
        );
    }
}

export default Notes;
