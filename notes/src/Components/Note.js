import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div class='note'>
                <h3 class='note-title'>
                    {this.props.note.title}
                </h3>
                <div class='note-body'>
                    {this.props.note.textBody}
                </div>
            </div>
        )
    }
}

export default Note;