import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotesTest extends Component {
    state ={
        notes: [],
    }
    // componentDidMount() {
    //     this.setState({ notes: this.props.notes})
    // }
render() {
    {/* <Link to={{pathname: `/note/${note.id}`, state: { currentNote: note}}}> */}
    return (
        <div className="rightSide">
        <h2 className='yourNotes'>Your Notes:</h2> 
        <div className="listthing">
        {this.props.notes.map(note => {
            return (
          <Link to={`/note/${note.id}`}>  
           <div key={note.id} className="borderGore">
           {note.title} <br />
            {note.text}</div></Link>
            )
        })}
        </div>
         </div>
    )
}
}


export default NotesTest;