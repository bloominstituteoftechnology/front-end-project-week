import React, { Component } from 'react';
import './NoteView.css';
import { notes } from './notes.js';

export default class NoteView extends Component {
    constructor() {
        super();
        this.state={
          note: []
        };
    }
    
      componentDidMount() {
        const { id } = this.props.match.params;
        console.log(notes);
        this.setState({ note: notes[id] });
      }

    render() {
        console.log(notes.note_name);
    return (
            <div>
            <div>{notes.note_name}</div>
            <div>{this.state.note_content}</div>
            </div>
    )}
}