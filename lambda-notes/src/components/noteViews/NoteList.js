import React, { Component } from 'react';
import {connect} from 'react-redux';

import NoteCard from '../NoteCard';
import {fetchNotes} from '../../actions/index';

class NoteList extends Component {

  componentDidMount = () => {
    this.props.fetchNotes()
  }
  
  render() { 
    return (
      <div className="main-container">
        <div className="header-container">
          <h1>Your Notes</h1>
        </div>
        <div className="body-container">
          {this.props.loading ? <h1>Loading Note List</h1> : null}
          {this.props.error !== '' ? <h1>{this.props.error}</h1> : null }
          {this.props.notes.map(note => {
            return (
              <NoteCard
                title={note.title}
                textBody={note.textBody} 
              />
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    notes: state.notes,
    error: state.error,
    loadin: state.fetchingNotes,
})

export default connect(mapStateToProps, {fetchNotes})(NoteList);