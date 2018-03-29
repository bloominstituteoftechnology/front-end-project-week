import React from 'react';
import './NoteCard.css';
import { Link } from 'react-router-dom';

export const NoteCards = (props) => {
  console.log(props); 
    return (
      <div className="NoteSection">        
        <div className="row">
          {props.notes.map((note, i) => {
            return (              
              <div key={i} className="note1 col-md-3">
            <Link to="/Save/:id" className="Link"><h4 className="title">{note.title}</h4>
              <hr />
                <p>{note.text}</p>
                </Link> </div>             
          )})}                                      
        </div>       
      </div>
    );
  }