import styled from "styled-components";

//App.js
export const AppWrapper = styled.div`
  display: flex;
`;

//NoteForm.js
export const NoteFormWrapper = styled.div``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

//Notes.js
export const NoteCardList = styled.div`
  display: flex;
  flex-wrap: wrap;

`;
export const NoteCard = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid black;
 
`;

export const NoteCardTitle = styled.h2``;
export const NoteCardText = styled.p`
min-width: 0;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;
