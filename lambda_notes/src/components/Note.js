// This is how each individual note is styled and displayed when it is passed to AllNotes

import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const SingleCard = styled.div`
  padding: 3rem;
  background-color: #fafafa;
  width: 10rem;
  height: 10rem;
  margin: 1.5rem;
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bdbdbd;
  color: black;
  overflow: hidden;
`;

const NoteBody = styled.div`
  font-family: "Raleway", sans-serif;
  color: black;
  overflow: hidden;
`;

const Note = ({ note: { _id, title, textBody } }) => {
  return (
    <Link to={`/viewnote/${_id}`}>
      <SingleCard>
        <CardTitle>{title.substr(0, 10) + "..."} </CardTitle>
        <NoteBody>{textBody.substr(0, 20) + "   ..."}</NoteBody>
      </SingleCard>
    </Link>
  );
};

export default Note;
