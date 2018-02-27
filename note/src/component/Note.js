import React, { Component } from 'react';
import '../App.css';

class Note extends Component {
    render() {
        return (
            <div className='Note-Container'>
                <h3 className='Note-Title'>{this.props.note.title}</h3>
                <p className='Note-Text'>{this.props.note.text}</p>
            </div>
        );
    }
}

export default Note;