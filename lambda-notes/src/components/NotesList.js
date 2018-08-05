import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { Link } from 'react-router-dom'; 
import { getNotes } from '../actions/notesActions'

class NotesList extends Component {
  
  componentDidMount() {
    this.props.getNotes();
  }
  render() {
    console.log('NotesList', this.props)
    return ( 
      <div>
        <h3>Your Notes:</h3>
        {
          this.props.notes.map((note) => {
            return (
              <Link key={Math.random()} to={`/note/${note._id}`}>
                <Note title={note.title} textBody={note.textBody} />
              </Link>
            );
          })
        }
      </div>
     );
  }  
};
 
const mapStateToProps = (state) => {
  console.log('mstp',state);
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, {getNotes})(NotesList);
