import React, { Component } from 'react';


class NoteCard extends Component {

    state = { 
        noteTitle: 'Test Note',
        noteText: 'I dont knwo thea was gnsfkjasdnn alsjndkjnaksundkndka ka naskjdn asjkdn kas' 
    }


    render() {
        return (
            <div className='test'>
                <a href='/noteview' className='note_card'>
                    <h6>{this.state.noteTitle}</h6>
                    <hr/>
                    <p>{this.state.noteText}</p>
                </a>
            </div>
        )
    }
}

export default NoteCard; 