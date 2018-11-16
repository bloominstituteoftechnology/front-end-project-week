import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to='' class='note'>
                <h3 class='note-title'>
                    {this.props.note.title}
                </h3>
                <div class='note-body'>
                    {this.props.note.textBody}
                </div>
            </Link>
        )
    }
}

export default Note;