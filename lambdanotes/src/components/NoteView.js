import React from 'react';
import './NoteView.css';
import Notes from './Notes';



function noteView(props){
  console.log(props.notes);
  return (
      <div className="cards-container">
        <div className="statement">
        <h2>Your Notes:</h2>
        </div>
        <div className="cards">
        {props.notes.map( note => (
          <Notes {...props}
          key ={note._id}
          note ={note}
          />
        ))}
        </div>
      </div>
    );
  }

export default noteView;