import React from "react";
import styled from 'styled-components';

const NoteViewContainer = styled.div`
`

const NoteViewButtons = styled.div`
text-decoration: underline;
text-align: right;
display: flex;
margin-left: 1800px;

p {
    cursor: pointer;
}

p:first-child {
    margin-right: 20px;
}
`

const NoteViewContent = styled.div`
text-align: left;
margin-left: 300px;

p {
    width: 1500px;
}
`

const NoteView = props => {

  return (
    <NoteViewContainer>
      <NoteViewButtons>
        <p>edit</p>
        <p>delete</p>
      </NoteViewButtons>
      <NoteViewContent>
        <h3>title</h3>
        <p>textBody</p>
      </NoteViewContent>
    </NoteViewContainer>
  );
};

export default NoteView;
