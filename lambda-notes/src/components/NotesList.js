import React, { Component } from 'react';
import Note from './Note';

class NotesList extends Component {
    render() { 
        return ( 
            <div>
                <ul>
                    {this.props.notes.map(note => {
                        return (
                            <Note
                                name={note.title}
                                id={note.id}
                                content={note.content}
                                />
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 



export default NotesList;