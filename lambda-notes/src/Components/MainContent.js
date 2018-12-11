import React from 'react'; 
import DisplayNotes from './DisplayNotes'
import CreateNoteForm from './CreateNoteForm.js'
import DisplayCard from './DisplayCard.js'
import { Route } from 'react-router-dom';


// routing done in this component https://fe-notes.herokuapp.com/note/get/id

const MainContent = ({ addNote, content, update }) => {
  return (
    <div className='main-content' >

      <Route exact path={'/'} render={ props => {
        return (
          <React.Fragment>
            <h1>Your Notes:</h1>
            <DisplayNotes 
              {...props}
              notes={content} />
          </React.Fragment>
        )
      }} />

      <Route path={'/note/:id'} render={ props => {
        return <DisplayCard {...props} content={content}  />
      }} />

      <Route path={'/create'} render={ props => {
        return (
          <React.Fragment>

            <h1>Create New Note:</h1>

            <CreateNoteForm 
              {...props}
              addNote={addNote}
              update={update}/>

          </React.Fragment>
        )
      }} />

      
    </div>
  )
}

export default MainContent;