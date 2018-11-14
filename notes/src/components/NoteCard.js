import React from 'react';

import styled from 'styled-components';

const NoteContainer = styled.div`
    padding: 10px 20px 15px 20px;
    margin-bottom: 10px;
`;

const TextContainer = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    line-height: 2;
`;

const NoteTitle = styled.h3`
    font-size: 20px;
    margin: 0px 0px 5px 0px;
`;

const NoteCard = (props) => {
  return (
    <NoteContainer>
      <NoteTitle>{props.title}</NoteTitle>
      <hr></hr>
      <TextContainer>{props.text}</TextContainer>
    </NoteContainer>
  );
};

NoteCard.defaultProps = {
  title: '',
  textBody: '',
};

export default NoteCard;

{/* <button onClick={() => this.props.delete(note._id)}>Delete</button> */}