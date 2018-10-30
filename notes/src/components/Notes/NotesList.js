import React from 'react';
import {Link, Route} from 'react-router-dom';




import NoteCard from './NoteCard';

const NotesList = (props) => {
 
  
    return (
      <div className="notes-container">
        <h2>Your Notes:</h2>
        {props.notes.map( (note) => (
          <div key={note._id}>
          <Link to={`/get/${note._id}`}>
          <NoteCard 
              title={note.title}
              text={note.textBody} 
              id={note._id} 
            />
          </Link>
          </div>
          ))}
          <Route path='/get/:id' component={NoteCard}/>
    </div>
    )
    
  }
  
  

   export default NotesList;