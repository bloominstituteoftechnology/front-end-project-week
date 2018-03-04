import React, { Component } from 'react';
import '../App.css';

class NoteView extends Component {
    render() {
        return (
            <div className='Note-Container'>
                <h3 className='Note-Title'>
                    {/* {this.props.note.title} */}
                    THE TITLE
                </h3>
                <p className='Note-Text'>
                    {/* {this.props.note.text} */}
                    PARAGRAPH
                </p>
            </div>
        );
    }
}

export default NoteView;