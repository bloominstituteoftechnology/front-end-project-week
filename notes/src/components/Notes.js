
import React from 'react';
import axios from 'axios';
import './Notes.css';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';



// class YourNotes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: [],
//       newNote: {
//         tag: '',
//         title: '',
//         textBody: '',
//       }
//     }
//   }

function YourNotes(props) {
  function routeToNote(ev, note) {
    ev.preventDefault();
    props.history.push(`/${note.id}`);
    props.getNoteById(note.id)
  }
    
    return (
      
      <div className='container'>
        <div className="App">

          <div className='main-view'>
            <div className='title-cont'>
              <h2>Your Notes: </h2>
            </div>
            <div className="cont-body">
              {props.notes.map(note => (
                <div className="note"
                  onClick={ev => routeToNote(ev, note)}
                  key={note.id}>
                  <div className='note-title'>
                    <h3>{note.title}</h3>
                  </div>
                  <div className="note-body">
                    {note.textBody}
                  </div>     
                </div>
              )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

export default YourNotes;


