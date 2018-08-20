import React from "react";
import { Link } from "react-router-dom";
import NoteThumbnail from "./NoteThumbnail";
import styled from "styled-components";

const NotesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const NoteList = props => (
  <div>
    <h3>Your Notes:</h3>
    <NotesWrapper>
      {props.notes.map(note => (
        <Link key={note._id} to={`/note/${note._id}`}>
          <NoteThumbnail note={note} />
        </Link>
      ))}
    </NotesWrapper>
  </div>
);

export default NoteList;
