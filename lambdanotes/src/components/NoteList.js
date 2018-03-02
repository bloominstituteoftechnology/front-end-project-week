import React from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { SortableContainer, arrayMove } from 'react-sortable-hoc';
import Note from './Note';

import './NoteList.css';

const SortableList = SortableContainer(props => {
  return (
    <ul className="YourNotes-NoteList">
    {props.notes.map((note, index) => {
      return (
        <Link to={"/view"} key={note.id} onClick={() => {props.handleNoteIndex(note.id)}}>
          <Note
            onSortEnd={props.onSortEnd}
            note={note}
            index={index}
            title={note.title}
            body={note.body}
          />
        </Link>
      );
    })}
  </ul>
  );
});

class NoteList extends React.Component {
  boolEmptyNotes = true;

  state = {
    notes: this.props.notes,
  };

  componentWillMount() {
    if(this.state.notes.length > 0) {
      this.boolEmptyNotes = false;
    } else {
      this.boolEmptyNotes = true;
    };
  };

  handleNoteIndex = index => {
    this.props.handleNoteViewIndex(index);
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      notes: arrayMove(this.state.notes, oldIndex, newIndex),
    });
  };

  render() {
    return (
      <div className="YourNotes">
        <h2 className="SectionTitle">Your Notes:</h2>
        {this.boolEmptyNotes ? (
          <h3 className="YourNotes-Empty">It looks like you don't have any notes yet, click "Create New Note" to get started!</h3>
        ) 
        : (null)}
        <SortableList lockToContainerEdges={true} axis={"xy"} notes={this.state.notes} onSortEnd={this.onSortEnd} handleNoteIndex={this.handleNoteIndex} />
        {!this.boolEmptyNotes ? (
          <CSVLink className="YourNotes-CSV" data={this.state.notes} filename={"lambda-notes.csv"}>Download CSV</CSVLink>
        ) : (null)}
      </div>
    );
  };
}

export default NoteList;
