import React, { Component } from "react";
import NoteCard from "./notecard";
import { SortableContainer } from "react-sortable-hoc";

const SortableList = SortableContainer(props => {
  return (
    <div className="notes-div">
      {props.notes.map((note, index) => (
        <NoteCard
          key={`note-${index}`}
          note={note}
          index={index}
          viewNote={props.viewNote}
        />
      ))}
    </div>
  );
});

class ListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      searchFlag: false,
      filteredNotes: this.props.notes
    };
  }

  maybeFilteredNotes = () => {
    return this.state.searchFlag ? this.state.filteredNotes : this.props.notes;
  };

  searchList = e => {
    this.setState({
      filteredNotes: this.props.notes.filter(p => {
        let lowerText = p.text.toLowerCase();
        let lowerTitle = p.title.toLowerCase();
        return (
          lowerTitle.includes(e.target.value.toLowerCase()) ||
          lowerText.includes(e.target.value.toLowerCase())
        );
      }),
      [e.target.title]: e.target.value
    });
    if (e.target.value === "") this.setState({ searchFlag: false });
    else this.setState({ searchFlag: true });
  };

  render() {
    if (this.props.notes.length === 0) {
      return (
        <div className="right-div">
          <h3 className="notes-h3">Your Notes:</h3>
          <div className="notes-div">
            <h3>
              You don't have any notes, click "Create New Note" to add some!
            </h3>
          </div>
        </div>
      );
    }
    return (
      <div className="right-div">
        <h3 className="notes-h3">Your Notes:</h3>
        <div className="search-sort">
          <input
            className="search-field"
            placeholder="Search..."
            title="search"
            onChange={this.searchList}
          />
          <div className="sort-button button" onClick={this.props.sortList}>
            Sort List
          </div>
        </div>
        <SortableList
          distance={10}
          notes={this.maybeFilteredNotes()}
          onSortEnd={this.props.onSortEnd}
          axis="xy"
          viewNote={this.props.viewNote}
        />
      </div>
    );
  }
}

export default ListView;
