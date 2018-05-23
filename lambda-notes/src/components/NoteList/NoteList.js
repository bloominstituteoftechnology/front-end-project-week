import React, { Component } from 'react';
import Title from '../Title';
import NoteCard from '../NoteCard';
import { connect } from 'react-redux';
import { getNotes } from '../../actions';

class NoteList extends Component {
  componentDidMount(){
    this.props.getNotes();
  }
  render() { 
    return ( 
      <div className="note-list">
        <Title title="Your Notes" />
        <div className="note-cards">
          {this.props.notes.map(note => <NoteCard key={note.id} note={note} />)}
        </div>
      </div>
     )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};
 
export default connect(mapStateToProps, { getNotes })(NoteList);