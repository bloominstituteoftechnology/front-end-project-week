import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import DragSortableList from 'react-drag-sortable';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { updateNoteOrdering } from '../actions';

class NoteList extends React.Component {
  state = {
    isSortable: false
  }

  toggleSortable = e => {
    this.setState({ isSortable: e.target.checked })
  }

  onSort = (sortedList) => {
    const updatedNoteOrdering = JSON.stringify(sortedList.map(note => {
      return Number(note._id);
    }));
    this.props.updateNoteOrdering({ noteOrdering: updatedNoteOrdering });
  }

  render() {
    // reverses note array
    let notes = this.props.notes;

    // if notes are not yet loaded into store, return loading icon
    notes.forEach(note => {
      // trims regular case note title
      if (note.title.length > 14) {
        note.title = note.title.slice(0, 14) + '...';
      }
      // trims uppercase note title
      if (note.title.length > 12 && note.title === note.title.toUpperCase()) {
        note.title = note.title.slice(0, 12) + '...';
      }
      // trims regular case note body
      if (note.content.length > 95) {
        note.content = note.content.slice(0, 95) + '...';
      }
      // trims uppercase note body
      if (note.content.length > 87 && note.content === note.content.toUpperCase()) {
        note.content = note.content.slice(0, 87) + '...';
      }
    });

    // creates array of draggable or non-draggable notes, depending on isSortable
    const draggableNotes = notes.map(note => {
      const jsx = (this.state.isSortable) ?
        (
          <div className="note-preview-container" key={Math.random()}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ) : (
          <Link to={`/notes/${note.id}`} key={Math.random()}>
            <div className="note-preview-container no-drag">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          </Link>
        );
      return { content: jsx, _id: note.id }
    })

    // returns loading component if notes aren't fetched
    if (this.props.fetchingNotes && !this.props.notesFetched) {
      return (
        <Loading />
      )
    }

    return (
      <div className="main-container">
        <div className="note-previews-header-container">
          <h2>Your Notes:</h2>
            <label>
              Sort notes
              <Toggle
                checked={this.state.isSortable}
                onChange={this.toggleSortable}
                icons={false}
              >
              </Toggle>
            </label>

        </div>
          <div className="note-previews-container">
            <DragSortableList items={draggableNotes}
                              onSort={this.onSort}
                              type="grid"/>
          </div>
      </div>
    )
  }
}

NoteList.defaultProps = {
  notes: []
};

const mapStateToProps = (state) => {
  return {
    fetchingNotes: state.fetchingNotes,
    notesFetched: state.notesFetched
  }
}

export default connect(mapStateToProps, { updateNoteOrdering })(NoteList);
