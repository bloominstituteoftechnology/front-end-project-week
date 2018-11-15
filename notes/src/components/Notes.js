import React, { Component } from 'react';
import { Note } from './Note';
import {Link , Route} from 'react-router-dom';

export class Notes extends Component {
    render(){
    return (
        <div>
            {this.props.notes.map(note => {
                return (
                    <div>
                        <Link to={`/note/${note._id}`}>
                            <Note note={note} title={note.title} textBody={note.textBody}  />
                        </Link>
                        
                        
                    </div>
                )
            })}
            
        </div>
    )
  }
}
