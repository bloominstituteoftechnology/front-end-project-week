import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NoteCard extends Component {

    render() {
        let textPreview = this.props.note.text.slice(0, 100) + '...';
        return (
            <div className='test'>
                <Link to={`/noteview/${this.props.note.id}`} className='note_card'>   
                    <h6 className='header_font'>{this.props.note.title}</h6>
                    <hr/>
                    <div className='card_text'>{textPreview}</div>
                </Link>
            </div>
        )
    }
}

export default NoteCard; 