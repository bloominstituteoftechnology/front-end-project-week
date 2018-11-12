import React from 'react';
import NavBar from './NavBar';
import SingleNote from './SingleNote';


const ListView = props => {
  return (
      <div className='list-view'>
        <NavBar />
        <div className='all-notes-container'>
          <h2>Your Notes:</h2>
          <ul>
            {props.notes.map(note => {
              return <SingleNote 
                id={note._id} 
                key={note._id} 
                note={note} 
                />
            })}
          </ul>
        </div>
      </div>
  )
}


export default ListView;
