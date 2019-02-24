import React, { Component } from "react"
import { connect } from "react-redux"

import { fetchCards } from "../store/actions"
import Note from "../components/Note"
import { NotesWrapper } from "../styles/noteStyles"

class CardsList extends Component {
  componentDidMount = () => {
    this.props.fetchCards()
  }

  render() {
    return (
      <NotesWrapper>
        <h3>Your Notes:</h3>
        {this.props.notes.map(note => (
          <Note note={note} />
        ))}
      </NotesWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  }
}

export default connect(
  mapStateToProps,
  { fetchCards }
)(CardsList)
