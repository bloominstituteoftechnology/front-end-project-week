import React from 'react';

import styled from 'styled-components';

const NoteContainer = styled.div`
    padding: 10px 15px 15px 15px;
    margin-bottom: 10px;
`;

const TextContainer = styled.div`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
`;

const NoteCard = (props) => {
  return (
    <NoteContainer>
      <h3>{props.title}</h3>
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