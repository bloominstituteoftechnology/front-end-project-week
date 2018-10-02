import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotesList extends Component {
    render() {
        return (
            <div className="noteWrap">
                <ul>
                    {this.props.notesList.map(note => {
                       <div className="noteCards" key={note.id}>
                                tag={note.tag}
                                <h2>title={note.title}</h2>
                                <p>textBody={note.textBody}</p>
                                <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        </div>
                    })}
                </ul> 
            </div>
        );
    }
}
export default NotesList;