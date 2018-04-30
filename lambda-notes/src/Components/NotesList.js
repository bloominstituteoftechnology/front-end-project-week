import React, {Component} from 'react';
import Note from './Note';
import NoteCard from './NoteCard';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

export default class NotesList extends Component{
    constructor(props) {
        super(props);
        // this.state = {
            
        // };
    }
    render() {
        return(
        <div>
            {/* {console.log(this.props)} */}
        {this.props.notes.map((note, index) => { // THIS IS OUR LOOP!
            //  console.log(notes[note])   
            console.log(note + index);
            return <NoteDetails key={note.title} note={note} index={index}/>
        })}
        </div>
        )
    };
};



function NoteDetails({note, index}) {
    return (
         
       // <Link to={`/NoteCard/${note.title}`}>
       console.log(note + index),
        <Note note={note} index={index}/> 
       // </Link>
       
    );
}