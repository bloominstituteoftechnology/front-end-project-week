import styled from "styled-components";

export const NoteCard = styled.div`
  margin-left: 250px;
  padding-top: 4%;
  min-height: 100vh;
  position: relative;
  background-color: #F3F3F3;

  .button-container {
    position: absolute;
    right: 10%;
    top: 2.5%;

    span {
      cursor: pointer;
      margin-left: 25%;
      color: black;
      text-decoration: underline
      font-size: 1.3rem;
      font-weight: normal;
    }
  }

  h2 {
    width: 90%;
    text-align: left;
    margin: 0 auto;
    margin-top: 2%;
  }

  p {
    width: 90%;
    margin: 0 auto;
    margin-top: 3%;
    text-align: left
    line-height: 2rem
    font-size: 1.2rem;
    white-space: pre-wrap
  }
`;
