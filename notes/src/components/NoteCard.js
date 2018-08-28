import React from "react";

import styled from "styled-components";

const SingleCard = styled.div`
  padding: 3rem;
  background-color: #fafafa;
  width: 30rem;
  height: 30rem;
  margin: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bdbdbd;
`;

const NoteCardBody = styled.div`
  font-family: "Raleway", sans-serif;
`;

const NoteCard = ({ note: { id, title, textBody } }) => {
  return (
    <SingleCard>
      <CardTitle>{title}</CardTitle>
      <NoteCardBody>{textBody.substr(0, 250) + "..."}</NoteCardBody>
    </SingleCard>
  );
};

export default NoteCard;
