import React, { Component } from 'react'
import Note from '../components/note'
import '../App.scss'
import axios from 'axios'

class MainSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "noteSection">
          {this.props.notes.map(note => {
          return (<Note key={note._id} note={note} />)
        })}
      </div>
    )
  }
}

export default MainSection
