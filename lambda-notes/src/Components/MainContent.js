import React from 'react'; 
import DisplayNotes from './DisplayNotes'
import NoteForm from './NoteForm.js'
import DisplayCard from './DisplayCard.js'
import { Route } from 'react-router-dom';


// routing done in this component https://fe-notes.herokuapp.com/note/get/id

const MainContent = ({ addNote, content, deleteNote, editNote }) => {
  
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
        return <DisplayCard {...props} content={content} deleteNote={deleteNote}  />
      }} />

      <Route path={'/create'} render={ props => {
        return (
          <React.Fragment>

            <h1>Create New Note:</h1>

            <NoteForm 
              {...props}
              addNote={addNote}
            />

          </React.Fragment>
        )
      }} />

      <Route path={'/edit/:id'} render={ props => {
        return (
          <React.Fragment>

            <h1>Edit Note:</h1>

             <NoteForm 
              {...props} 
              content={content} 
              editNote={editNote} />

          </React.Fragment>
        )
      }} />
      
    </div>
  )
}

export default MainContent;