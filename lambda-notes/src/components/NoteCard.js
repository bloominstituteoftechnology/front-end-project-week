import React, { Component } from 'react';


class NoteCard extends Component {

    state = { 
        noteTitle: 'Test Note',
        noteText: 'I dont knwo thea was gnsfkjasdnn alsjndkjnaksundkndka ka naskjdn asjkdn kas' 
    }


    render() {
        return (
            <div className='test'>
                <a href={`/noteview/${this.props.note.id}`} className='note_card'>
                    
                    <h6>{this.props.note.title}</h6>
                    <hr/>
                    <div className='card_text'>{this.props.note.text}</div>
                </a>
            </div>
        )
    }
}

export default NoteCard; 