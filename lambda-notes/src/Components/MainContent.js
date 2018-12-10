import React from 'react'; 
import DisplayNotes from './DisplayNotes'

// routing done in this component

const MainContent = props => {
  return (
    <div className='main-content' >
      <h1>Your Notes:</h1>
      <DisplayNotes notes={props.content} />
    </div>
  )
}

export default MainContent;