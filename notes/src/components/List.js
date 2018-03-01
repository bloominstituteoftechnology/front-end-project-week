import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes } from '../actions';

class List extends React.Component {

  
  componentWillMount() {
    this.props.fetchNotes(this.props.misc.username);
  }

  render() {
    return (
      <div className="content">
        <div className="your-note">Your Notes:</div>
        {this.props.notes.length === 0 && !this.props.misc.fetching_notes ? <div className="no-notes">You currently don't have any notes. Click 'Create New Note' to add a note.</div> : null}
        {this.props.notes.length === 0 && this.props.misc.fetching_notes ? <div className="no-notes">Loading notes...</div> : null}
        <div className='list'>
        	{this.props.notes.map((note) => {
            return (
              <Link key={note.id} to={{ pathname: `/a/notes/${note.id}`, note: note}}>
                <div className='notes'>
                  <div className="notes-title">{note.title}</div>
                  <div className="note-line"></div>
                  <div className="notes-content">{note.content}</div>
                  <div className="note-date">Created on: {note.date}</div>
                </div>
              </Link>
            );
        	})}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
  	notes: state.notes,
    misc: state.misc
  } 
}

export default connect(mapStateToProps, {fetchNotes})(List);