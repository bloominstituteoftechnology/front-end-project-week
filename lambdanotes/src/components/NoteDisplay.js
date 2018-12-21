import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions'
import Note from './Note'
import './Home.css'

class NoteDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="note-display">
        <h2> Your Notes: </h2>
        <div className="display-grid">
          {this.props.notes.map(note => {
            return (
              <Note
                title={note.title}
                textBody={note.textBody}
              />
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