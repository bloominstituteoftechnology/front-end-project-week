import React, { Component } from 'react';
import Note from './Note';
import {notes} from '../data';


class NotesList extends Component {
    render(props) { 
        return ( 
            <div>
                <ul>
                    {this.props.notes.map(note => {
                        return (
                            <Note
                            title={note.title}
                                content={note.content}
                                note={note}
                                />
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 



export default NotesList;