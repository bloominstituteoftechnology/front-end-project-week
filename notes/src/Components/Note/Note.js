import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Note extends Component {

    render() {
        return (
<<<<<<< HEAD:notes/src/Components/Note.js
            <div>
                Note
        </div>
        )
=======
            <Link to={`/notes/${this.props.note.id}`} className='note'>
                <h3 className='note-title'>
                    {this.props.note.title}
                </h3>
                <div className='note-body'>
                    {this.props.note.body}
                </div>
            </Link>
        )           
>>>>>>> cb5ed60e989ee41ecab4bda4c6ed01c1058c14f5:notes/src/Components/Note/Note.js
    }
}

export default Note;