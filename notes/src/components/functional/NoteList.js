import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getData } from '../../store/actions';
import Note from '../presentational/Note';

import { NotesContainer, NoteAlign } from '../style/noteStyle';

class NoteList extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <NotesContainer>
        <h2>Your Notes:</h2>
        <NoteAlign onDragOver={(e) => this.onDragOver(e) } onDrop={(e)=>{this.onDrop(e)}}>
          {this.props.notes.map(note => (
            <Link to={`/notes/${note._id}`} key={note._id} draggable onDragStart = {(e) => this.onDragStart(e, note._id) }>
              <Note note={note} />
            </Link>
          ))}
        </NoteAlign>
      </NotesContainer>
    )
  }
}

const mapStateToProps = state => {

  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { getData })(NoteList);