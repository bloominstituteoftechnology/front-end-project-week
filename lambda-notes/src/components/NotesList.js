import React, { Component } from 'react';
import Note from './Note';
import {data} from '../data';


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
                                />
                        )
                    })}
                </ul>
            </div>
         );
    }
}
 



export default NotesList;