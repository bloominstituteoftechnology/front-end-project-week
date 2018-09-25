import React, {Component} from 'react';
import Note from './Note';

class NotesList extends Component {
    render() {
        return (
            <div>
                {this.props.notes.map(note=> {
                    return ( <Note
                                title={note.title}
                                textBody={note.textBody}
                                key={note.id}
                            /> );
                })}
            </div>
        );
    }
}

export default NotesList;