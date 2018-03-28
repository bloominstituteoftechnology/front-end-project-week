import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NoteCard extends Component {



    render() {
        return (
            <div className='test'>
                <Link to={`/noteview/${this.props.note.id}`} className='note_card'>
                    
                    <h6 className='header_font'>{this.props.note.title}</h6>
                    <hr/>
                    <div className='card_text'>{this.props.note.text}</div>
                </Link>
            </div>
        )
    }
}

export default NoteCard; 