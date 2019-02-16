import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Note.css';

class Note extends Component {

    render() {
        return (
            <Link to={`/${this.props.note.id}`} className='note'>
                <h3 className='note-title'>
                    {this.props.note.title}
                </h3>
                <div className='note-body'>
                    {this.props.note.body}
                </div>
            </Link>
        )
    }
}

export default Note;