import React from "react";

import styled from "styled-components";

const SingleCard = styled.div`
  padding: 3rem;
  background-color: #fafafa;
  width: 10rem;
  height: 10rem;
  margin: 1.5rem;
  border: 1px solid black;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bdbdbd;
`;

const NoteBody = styled.div`
  font-family: "Raleway", sans-serif;
`;

const Note = ({ note: { id, title, textBody } }) => {
  return (
    <SingleCard>
      <CardTitle>{title}</CardTitle>
      <NoteBody>{textBody.substr(0, 50) + "..."}</NoteBody>
    </SingleCard>
  );
};

export default Note;
