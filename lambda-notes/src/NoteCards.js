import React from 'react';
import './NoteCard.css';
import { Link } from 'react-router-dom';

export const NoteCards = (props) => {  
  console.log('this is props',props); 
    return (
      <div className="NoteSection">        
        <div className="row">
          {props.notes.map((note, id) => {
            return (              
              <div key={id} className="note1 col-md-3">
            <Link to={`/Save:${note.id}`} className="Link"><h4 className="title">{note.title}</h4>
              <hr />
                <p>{note.text}</p>
                </Link> </div>             
          )})}                                      
        </div>       
      </div>
    );
  }