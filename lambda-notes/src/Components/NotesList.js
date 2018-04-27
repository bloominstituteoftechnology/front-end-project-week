import React, {Component} from 'react';
import Note from './Note';
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
            {console.log(this.props)}
        {this.props.notes.map(note => {
            console.log(note)   
            return <NoteDetails key={note.title} note={note}/>;
        })}
        </div>
        )
    };
};



function NoteDetails({note}) {
    return (
        console.log(note.title),
        <Link to={`/Note/${note.title}`}>
        <Note title={note.title} body={note.body}/>
        </Link>
    );
}