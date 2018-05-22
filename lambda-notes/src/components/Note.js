import React, { Component } from 'react';
import ListNotes from './ListNotes';
import './Note.css';
import { Route, Link } from 'react-router-dom';
import EditNote from './EditNote'

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() { 
        const id = this.props.match.params.id;
        const { title, body } = this.props.notes[id];
        return (
            <div className='note-container'> 
                <div className="note-links">
                    <Link to={`/note/${id}/edit`}>
                        edit
                    </Link>
                    <Link to='/delete'>
                        delete
                    </Link>
                </div>
                <div className="view-note">
                    <h2> {title} </h2>
                    <p>{body}</p>
                </div>
            </div>    
        )
    }
}
 
export default Note;