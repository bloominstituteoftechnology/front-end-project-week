import React, {Component} from 'react';
import Note from './Note';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Notes.css';

class Notes extends Component  {
constructor(props){
    super(props);
}

    render(){
        
    return ( <div className = 'notes-wrapper'>
            {this.props.notes.map(notes => 
            <Note 
            title={notes.title}
            content={notes.content}
            key={notes.id} 
            notes={notes} 
            deleteNote={this.props.deleteNote}
            id={this.props.notes.id}
            
            /> )}
                
        </div>
        )
}
}
export default Notes;