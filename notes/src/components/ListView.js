import React from 'react';
import NavBar from './NavBar';
import SingleNote from './SingleNote';

// need to remove 8 SingleNote components once it is dynamic done now for layout purposes.

const ListView = props => {
  return (
      <div className='list-view'>
        <NavBar />
        <div className='all-notes-container'>
          <h2>Your Notes:</h2>
          <SingleNote />
          {/* <SingleNote />
          <SingleNote />
          <SingleNote />
          <SingleNote />
          <SingleNote />
          <SingleNote />
          <SingleNote />
          <SingleNote /> */}
        </div>
      </div>
  )
}

export default ListView;
