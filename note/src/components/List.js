import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotes, sortList } from '../actions';

class List extends React.Component {

  componentWillMount() {
    this.props.fetchNotes(this.props.misc.username);
  }

  handleSort = (type) => {
    this.props.sortList(type);
  }

  render() {
    return (
      <div className="content">
        <div className="list-bar">
          <div className="your-note">Your Notes: <span className="sort">Sort by: <span className="sort-type" onClick={() => {this.handleSort('newest')}}>Newest</span> - <span className="sort-type" onClick={() => {this.handleSort('oldest')}}>Oldest</span></span></div>
        </div>
        
        {this.props.notes.length === 0 && !this.props.misc.fetching_notes ? <div className="no-notes">You currently don't have any notes. Click 'Create New Note' to add a note.</div> : null}
        {this.props.notes.length === 0 && this.props.misc.fetching_notes ? <div className="no-notes">Loading notes...</div> : null}
        <div className='list'>
        	{this.props.notes.map((note) => {
            
            return (
              <Link key={note.id} to={{ pathname: `/a/notes/${note.id}`, note: note}}>
                <div className='notes'>
                  <div className="notes-title">{note.title.length > 22 ? note.title.split('').slice(0, 23).join('') + '...' : note.title}</div>
                  <div className="note-line"></div>
                  <div className="notes-content">{note.content.length > 150 ? note.content.split('').slice(0, 150).join('') + '...' : note.content}</div>
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
export default connect(mapStateToProps, {fetchNotes, sortList})(List);