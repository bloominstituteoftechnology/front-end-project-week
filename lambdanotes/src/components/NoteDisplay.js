import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNotes } from '../actions'
import Note from './Note'
import './styles/NoteDisplay.css'

class NoteDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getNotes();
  }

  componentDidUpdate() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="note-display">
        <h2> Your Notes: </h2>
        <div className="note-display-grid">
          {this.props.notes.map(note => {
            return (
              <Link to={`/note/${note._id}`} className="notecard-link">
              <Note
                title={note.title}
                textBody={note.textBody}
                id={note._id}
              />
              </Link>
            );
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps, { getNotes })(NoteDisplay);