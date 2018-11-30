import React, { Component } from 'react';
import {connect} from 'react-redux';
import NoteCard from '../NoteCard';
import {fetchNotes} from '../../actions/index';
import './NoteList.css';;


class NoteList extends Component {

  componentDidMount = () => {
    this.props.fetchNotes()
  }
  
  render() { 
    return (
      <div className="list-main-container">
        <div className="list-header-container">
          <h1>Your Notes</h1>
        </div>
        <div className="list-body-container">
          {this.props.loading ? <h1>Loading Note List</h1> : null}
          {this.props.error !== '' ? <h1>{this.props.error}</h1> : null }
          {this.props.notes.map(note => {
            return (
              <NoteCard
                key={Math.random()}
                id={note._id}
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
    loading: state.fetchingNotes,
})

export default connect(mapStateToProps, {fetchNotes})(NoteList);
