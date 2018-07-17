import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Notes = props => {
      return (
      <div>
        <h1>Your Notes:</h1>
        <ul>
          {props.notes.map(note=>{
            return(
              <Link to={`/note/${note.id}`} key={Math.random()}>
                <h2>{note.title}</h2>
                <p>{note.textBody}</p>
              </Link>
            )
          })}
        </ul>
      </div>
    )
}

export default Notes;
