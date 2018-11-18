import React from "react";
import Note from "./Note";
import styled from "styled-components";
import SearchBar from "../Search/SearchBar"
import { connect } from 'react-redux'
import { fetchNotes } from '../../actions/noteActions'

const Header = styled.h1`
color: #555;
margin:40px 10px;
padding: 5px;

`
class NoteList extends React.Component {


  componentDidMount() {
    this.props.fetchNotes()
  }

  render() {
    return (
      <div>
        <SearchBar search={this.props.search} handleChange={this.props.handleChange} />
        <Header>Your Notes:</Header>
        {this.props.loading ? <h1>LOADING....</h1> : null}
        {this.props.error !== null ? <h1>{this.props.error}</h1> : null}
        {this.props.notes.map(note => (
          <Note note={note} key={note._id} />
        ))}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes,
    error: state.noteReducer.error,
    loading: state.noteReducer.error,
    title: state.noteReducer.title,
    textBody: state.noteReducer.textBody,
    delete: state.noteReducer.delete,
    search: state.noteReducer.search

  }
}

export default connect(mapStateToProps, {fetchNotes})(NoteList);
