import React from "react";
import Note from "./Note";
import styled from "styled-components";
import SearchBar from "../Search/SearchBar"

const Header = styled.h1`
color: #555;
margin:40px 10px;
padding: 5px;

`

const NoteList = props => {
  return (
    <div>
      <SearchBar search={props.search} handleChange={props.handleChange}/>
      <Header>Your Notes:</Header>
      {props.notes.map(note => (
        <Note note={note} key={note._id} />
      ))}
    </div>
  );
};

export default NoteList;
