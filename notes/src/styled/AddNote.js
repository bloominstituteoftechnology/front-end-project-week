import styled from "styled-components";

export const Form = styled.form`
  margin-left: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  background-color: #f3f3f3;
  min-height: 100vh;

  h3 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  input {
    width: 25%;
    padding: 1%;
    margin-bottom: 1%;
    border: 1px solid grey;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  textarea {
    height: 300px;
    margin-bottom: 3%;
    vertical-align: top;
    width: 60%;
    padding: 1%;
    border: 1px solid grey;
    font-size: 1.1rem;
    overflow-y: scroll;
  }

  div {
    width: 15%;
    height: 40px;
    color: #ffffff;
    background-color: #2ac0c4;
    font-weight: bold;
    font-size: 1rem;
    vertical-align: middle;
    border: 1px solid grey;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #ffffff;
      color: #2ac0c4;
    }
  }
`;
