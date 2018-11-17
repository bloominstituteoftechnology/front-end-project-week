import React, { Component } from 'react';
import { Note } from './Note';
import {Link , Route} from 'react-router-dom';
import './App.css';

export class Notes extends Component {
    render(){
    return (
        <div>
            {this.props.notes.map(note => {
                return (
                    <div>
                        <Link to={`/note/${note._id}`}>
                            <h1>{note.title}</h1>
                        </Link>
                        
                        
                    </div>
                )
            })}
            
        </div>
    )
  }
}
