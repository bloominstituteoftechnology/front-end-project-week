import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotesTest extends Component {
    state ={
        notes: [],
    }
    componentDidMount() {
        this.setState({ notes: this.props.notes})
    }
render() {
    return (
        <div className="rightSide"> <h2 className='yourNotes'>Your Notes:</h2>{this.props.notes.map(note => {
            return (
          <Link to={{pathname: `/note/${note.id}`, state: { currentNote: note}}}>  <div key={note.id} className="borderGore">{note.title} <br />
            {note.text}</div></Link>
            )
        })}
         </div>
    )
}
}


export default NotesTest;