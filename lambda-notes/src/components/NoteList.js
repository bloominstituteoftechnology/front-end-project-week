import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import DragSortableList from 'react-drag-sortable';
import '@zendeskgarden/react-toggles/dist/styles.css';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Toggle, Label } from '@zendeskgarden/react-toggles';

class NoteList extends React.Component {
  state = {
    isSortable: false
  }

  toggleSortable = e => {
    this.setState({ isSortable: e.target.checked })
  }

  render() {
    // reverses note array
    let notes = this.props.notes.slice().reverse();

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
      if (note.textBody.length > 95) {
        note.textBody = note.textBody.slice(0, 95) + '...';
      }
      // trims uppercase note body
      if (note.textBody.length > 87 && note.textBody === note.textBody.toUpperCase()) {
        note.textBody = note.textBody.slice(0, 87) + '...';
      }
    });

    // creates array of draggable or non-draggable notes, depending on isSortable
    const draggableNotes = notes.map(note => {
      if (this.state.isSortable) {
        return (
          <div className="note-preview-container" key={Math.random()}>
            <h3>{note.title}</h3>
            <p>{note.textBody}</p>
          </div>
        )
      } else {
        return (
          <Link to={`/notes/${note._id}`} key={Math.random()}>
            <div className="note-preview-container no-drag">
              <h3>{note.title}</h3>
              <p>{note.textBody}</p>
            </div>
          </Link>
        )
      }
    }).map(jsx => ({ content: jsx }));

    // returns loading component if notes aren't fetched
    if (this.props.fetchingNotes) {
      return (
        <Loading />
      )
    }

    return (
      <div className="main-container">
        <div className="note-previews-header-container">
          <h2>Your Notes:</h2>
          <ThemeProvider>
            <Toggle
              checked={this.state.isSortable}
              onChange={this.toggleSortable}
            >
              <Label>Sort Notes</Label>
            </Toggle>
          </ThemeProvider>
        </div>
          <div className="note-previews-container">
            <DragSortableList items={draggableNotes}
                              type="grid"/>
          </div>
      </div>
    )
  }
}

NoteList.defaultProps = {
  notes: []
};

export default NoteList;
