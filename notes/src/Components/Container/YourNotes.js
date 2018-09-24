import React, { Component } from 'react';
import { Note } from '../Presentational';

export class YourNotes extends Component {

    componentDidMount(){
    this.props.collectNotes();
    }

    render() {
        return (
            <div>YOUR NOTES
                {this.props.notes.map((note, index) => (<Note key={"note-"+index} note={note}/>))}
            </div>
        )
    }
}