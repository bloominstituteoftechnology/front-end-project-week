import React, {Component} from 'react';

import Note from './Note';

class NoteList extends Component {
    render() {
        return ( 
            <div className = "NoteList" >
            <h1> Notes </h1> 
            <ul> 
            {this.props.notes.map(note => {
                return (
                    <Note 
                        tags={note.tags}
                        title={note.title}
                        textbody={note.textbody}
                    />
                );
            })} 
            </ul> 
            </div>
        );
    }
}

Note.defaultProps = {
    notes: []
};

export default NoteList;