import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import React from 'react';



// class Note extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedNote: '',
//       notes: []
//     }
//   }


//   render() { 
//     const id = this.props.match.params.id.slice(1);
//     const note = this.props.notes[id]

function Note({note, deleteNote, history, updateNote}) {

  if (!note) {
    return <h2>Loading note data...</h2>;
  }

  return (
    <div>
        <div>

          <button
          onClick={event =>{
            updateNote(event, note);
            history.push('/');}}>      
            <p>edit</p>
            
          </button> 
          <button
            onClick={event => {
              deleteNote(event, note.id);
              history.push('/');
            }}>
            <p>delete</p>
          </button>
        </div>
        <div>
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
        </div>
    </div>
   )
}


export default Note;



