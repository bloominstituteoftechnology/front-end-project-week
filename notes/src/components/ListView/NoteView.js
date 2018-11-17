import React from 'react';
import { Link } from 'react-router-dom';

import './note.css'

class NoteView extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    deleteNoteHandler = (id) => {
        this.props.deleteNote(id);
    }
    
    render() {
        return (
            <div className="noteViewContainer">
                
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === `${note._id}`) {
                        return (
                            <div>
                                <div className="noteViewNav">
                                    <Link to={`/note/edit/${note._id}`}>
                                    <span className="noteButton" style={{cursor: 'pointer'}}>Edit</span>
                                    </Link>
                                    <span className="noteButton" style={{cursor: 'pointer'}} onClick={() => this.deleteNoteHandler(note._id)}>Delete</span>
                                </div>
                                <h2 className="noteViewTitle">{note.title}</h2>
                                <p className="noteViewText">{note.textBody}</p>
                            </div>
                        )
                    }
                })}


            </div>
        )
    }
};

export default NoteView;