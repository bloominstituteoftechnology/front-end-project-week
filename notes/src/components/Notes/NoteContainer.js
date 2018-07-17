import React, { Component } from 'react';
import NoteCard from './NoteCard'
import './NoteContainer.css'

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="note-ctn">
                <h2>Your Notes:</h2>
                <NoteCard notes={this.props.notes} />
            </div>)
    }
}

export default NoteContainer;