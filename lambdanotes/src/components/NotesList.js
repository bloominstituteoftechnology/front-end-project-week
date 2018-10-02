import React, { Component } from 'react';
import Notes from './Notes';

class NotesList extends Component {
    render() {
        return (
            <div className="noteWrap">
                <ul>
                    {this.props.notesList.map(note => {
                        return (
                            <Notes
                                key={note.id}
                                tag={note.tag}
                                title={note.title}
                                textBody={note.textBody}
                            />
                        );
                    })}
                </ul> 
            </div>
        );
    }
}
export default NotesList;