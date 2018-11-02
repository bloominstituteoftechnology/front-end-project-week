import React from 'react';
import NavBar from './NavBar';
import SingleNote from './SingleNote';
// import { NavBarViewers } from '../views'

// need to remove 8 SingleNote components once it is dynamic done now for layout purposes.

const ListView = props => {
  return (
      <div className='list-view'>
        {/* <NavBar /> */}
      {/* <NavBarViewers /> */}
        <div className='all-notes-container'>
          <h2>Your Notes:</h2>
          <ul>
            {props.notes.map(note => {
              return <SingleNote key={note.title} note={note} />
            })}
          </ul>
        </div>
      </div>
  )
}

export default ListView;
