import React from 'react';
import './Notes.css'

const Notes = (props) => { 
  console.log('ListView', props.notes)
  return (
    <div className="container">
      <h5 className="bg-white text-left text-secondary">Your Notes</h5>
      <div class="row">
        {props.notes.map(note => (
          <div className="col-sm">
            <div className="card">   
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <hr />
                <p className="card-text">{note.message}</p>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default Notes;