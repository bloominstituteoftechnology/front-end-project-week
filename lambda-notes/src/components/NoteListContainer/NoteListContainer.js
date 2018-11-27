import React from 'react'
import NoteList from '../NoteList/NoteList'
import './NoteListContainer.css'
export class NoteListContainer extends React.Component {
  render() {
    return (
      <div className="note_list_container">
      <button>View Your Notes.</button>
      </div>
    )
  }
}

export default NoteListContainer
