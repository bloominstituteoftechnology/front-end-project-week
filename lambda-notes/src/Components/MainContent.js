import React from 'react'; 
import DisplayNotes from './DisplayNotes'

const MainContent = props => {
  return (
    <div className='main-content' >
      <h1>Your Notes:</h1>
      <DisplayNotes />
    </div>
  )
}

export default MainContent;