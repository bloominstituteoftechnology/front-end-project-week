import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../actions/noteActions";

import NoteCard from "./NoteCard";
import Search from "./Search";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filterNotes = note => {
    const lowerCase = this.state.search.toLowerCase();

    if (
      note.title.toLowerCase().includes(lowerCase) ||
      note.textBody.toLowerCase().includes(lowerCase)
    ) {
      return note;
    }
  };

  // TODO: Fix search
  render() {
    const filtered = this.props.notes.filter(note => this.filterNotes(note));

    return (
      <div>
        <div>
          <Search search={this.props.search} inputHandler={this.inputHandler} />
        </div>
        {/* {this.props.loading ? <h1>LOADING....</h1> : null} */}
        {/* {this.props.error !== null ? <h1>{this.props.error}</h1> : null} */}
        <div>
          {filtered.map(note => {
            return (
              <div>
                <NoteCard key={note.id} note={note} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Notes.defaultProps = {
  notes: []
};

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes,
    loading: state.noteReducer.loading,
    error: state.noteReducer.error
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(Notes);