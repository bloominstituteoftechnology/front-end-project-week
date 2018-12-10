import React from 'react';
import styled from 'styled-components';

 const StyledNoteCard = styled.div`
  height: 265px;
  width: 31%;
  position: relative;
  background: #fff;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  h3 {
    font-weight: 700;
    font-size: 1.8rem;
  }
  span {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
 const NoteCard = props => {
  return (
    <StyledNoteCard>
      <h3>{props.note.title}</h3>
      <hr />
      <span>{props.note.textBody}</span>
    </StyledNoteCard>
  );
};

 export default NoteCard;