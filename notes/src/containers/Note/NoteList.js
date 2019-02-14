import React from "react";
import Note from "./Note";
import styled from "styled-components";
import SearchBar from "../Search/SearchBar";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions/noteActions";

const Header = styled.h1`
  color: #555;
  margin: 40px 10px;
  padding: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px;
`;

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  filterNotes = note => {
    const lowerCaseSearch = this.state.search.toLowerCase();
    if (note.title.toLowerCase().includes(lowerCaseSearch) ||
      note.textBody.toLowerCase().includes(lowerCaseSearch)) {
      return note
    }
  };
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const filteredNotes = this.props.notes.filter(note =>
      this.filterNotes(note)
    );
    return (
      <div>
        <SearchBar
          search={this.props.search}
          handleChange={this.handleChange}
        />
        <Header>Your Notes:</Header>
        {this.props.loading ? <h1>LOADING....</h1> : null}
        {this.props.error !== null ? <h1>{this.props.error}</h1> : null}
        <Container>
          {filteredNotes.map(note => (
            <Note note={note} key={note.id + note} />
          ))}
        </Container>
      </div>
    );
  }
}

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
)(NoteList);
