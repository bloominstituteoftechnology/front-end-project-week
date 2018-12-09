import styled from "styled-components";

export const MainContent = styled.div`
  background-color: #f3f3f3;
  margin-left: 250px;
  min-height: 100vh;
  text-align: left;
  padding: 2%;

  h2 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

export const NoteList = styled.div`
  box-sizing: border-box;
  background-color: #f3f3f3;
  display: flex;
  flex-flow: row wrap;
`;

export const Search = styled.div`
  box-sizing: border-box;
  padding-bottom: 3%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  input {
    width: 90%;
    line-height: 1.75rem;
    font-size: 1rem;
    border: 1px solid lightslategrey;
    padding: 0 5%;
    text-align: center;
    &:hover {
      border: 1px solid blue;
      cursor: pointer;
      font-color: blue;
    }
  }
  button {
    cursor: s-resize;
  }
`;
