import React, { Fragment, Component } from "react";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNotes: []
    };
  }

  searchPostsHandler = e => {
    const filteredNotes = this.props.notes.filter(note => {
      if (note.title.includes(e.target.value)) {
        return note;
      }
    });
    this.setState({ ...this.state, filteredNotes: filteredNotes });
  };

  render() {
    console.log("rendering NotesList component");
    if (this.props.isFetching) {
      return <h4>Loading items...</h4>;
    }
    return (
      <Fragment>
        <div className="searchContainer">
          <input
            type="text"
            placeholder="Search For Note"
            onKeyDown={this.searchPostsHandler}
          />
          <div className="sort">
            <select onChange={this.props.sortHandler}>
              <option value="" selected>
                SORT ME!
              </option>
              <option value="none">None</option>
              <option value="alphabetically">Alphabetically</option>
            </select>
          </div>
        </div>
        <h2>Your Notes:</h2>
        <div className="notes-container">
          {this.state.filteredNotes.length > 0
            ? this.state.filteredNotes.map(note => {
                return (
                  <div
                    className="note"
                    onClick={() =>
                      this.props.history.push(`/notes/${note._id}`)
                    }
                    key={note.id}
                  >
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                  </div>
                );
              })
            : this.props.notes.map(note => {
                return (
                  <div
                    className="note"
                    onClick={() =>
                      this.props.history.push(`/notes/${note._id}`)
                    }
                    key={note.id}
                  >
                    <h3>{note.title}</h3>
                    <p>{note.textBody}</p>
                  </div>
                );
              })}
        </div>
      </Fragment>
    );
  }
}

export default NotesList;
