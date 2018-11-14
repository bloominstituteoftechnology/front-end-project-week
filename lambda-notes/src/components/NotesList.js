import React, { Component } from 'react';
import Note from './Note.js';

class NotesList extends Component   {
    // constructor(props)  {
    //     super(props)
    // }

    render()    {
        return(
            <div>
                {this.props.notes.map(note  =>  {
                    return <Note note={note}/>
                })}
            </div>
        );
    }
}

export default NotesList;
