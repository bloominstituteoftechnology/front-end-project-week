import React, { Component } from 'react'
import NoteCards from '../components/NoteCards';

 class YourNotes extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid">
      <h1 className="your-notes-heading" style={{marginLeft:'19.36rem', paddingTop: '2.5rem'}}>Your Notes:</h1>
        <NoteCards />
      </div>
      </React.Fragment>
    )
  }
}

export default YourNotes;