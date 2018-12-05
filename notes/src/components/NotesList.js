import React from "react";

class NotesList extends React.Component {
  state = {
    search: ""
  };

  componentDidMount() {
    this.props.reset();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.search(e);
  };

  render() {
    return (
      <div className="notes-container">
        <div className="searchbar">
          <input
            type="text"
            name="search"
            value={this.state.search}
            placeholder="&#x1F50D; Search"
            onChange={this.handleChange}
          />
        </div>

        {this.props.notes.map(note => {
          return (
            <div
              key={note._id}
              onClick={() => this.props.history.push(`/notes/${note._id}`)}
            >
              <h2>{note.title}</h2>
              <p>{note.textBody}</p>
              <span>{note.tags}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NotesList;
