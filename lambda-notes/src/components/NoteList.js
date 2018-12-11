import React from "react";
import Markdown from "markdown-to-jsx";

class NoteList extends React.Component {
  //takes user to individual full-note view
  routeToNote(event, id) {
    event.preventDefault();
    this.props.history.push(`/note/${id}`);
  }

  //initial loading of notes
  componentDidMount() {
    this.props.getNoteList();
    this.props.getTags();
  }

  render() {
    if (!this.props.notes) {
      return <h1>Add some notes to get started!</h1>;
    } else {
      return (
        <div className="note-list-wrapper">
          <h2>Your Notes:</h2>
          <form className="searchbar-form">
            <input
              className="searchbar-input"
              type="text"
              value={this.props.searchTerm}
              placeholder="Search notes..."
              onChange={event => this.props.searchHandler(event.target.value)}
            />
          </form>
          <div className="sort-options">
            <button onClick={this.props.sortOldToNew}>
              Sort oldest to newest
            </button>
            <button onClick={this.props.sortNewToOld}>
              Sort newest to oldest
            </button>
            <button onClick={this.props.sortAlphabetically}>
              {" "}
              Sort alphabetically
            </button>
          </div>
          <div className="note-list">
            {this.props.notes.map(note => (
              <div
                className="note"
                key={note.id}
                onClick={event => this.routeToNote(event, note.id)}
              >
                <h3 className="note-title">{note.title}</h3>
                {/* Markdown element (from markdown-to-jsx dependency) allows the string within to be evaluated with markdown support */}
                <Markdown className="note-text">{note.content}</Markdown>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default NoteList;
