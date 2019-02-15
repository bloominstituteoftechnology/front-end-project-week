import React, { Component } from 'react'
import Note from '../components/note'
import '../App.scss'

class MainSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "noteSection">
          {this.props.notes.map(note => {
          return (<Note key={note._id} note={note} id={note._id} />)
        })}
      </div>
    )
  }
}

export default MainSection
