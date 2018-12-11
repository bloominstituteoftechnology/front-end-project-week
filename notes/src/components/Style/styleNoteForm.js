import styled from 'styled-components';

export const Form = styled.div`
  margin: 50px 10%;

  h2 {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-bottom: 20px;
  padding: 10px 2%;
  width: 50%;
  border: 1px solid #d3d2d3;
  border-radius: 4px;
  font-size: 24px;
  outline: none;
  background: #d3d2d3;

  &:focus {
    background: white;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  font-family: sans-serif;
  height: 300px;
  padding: 15px 2%;
  border: 1px solid #d3d2d3;
  border-radius: 4px;
  width: 100%;
  font-size: 28px;
  outline: none;
  background: #d3d2d3;

  &:focus {
    background: white;
  }
`;

export const Button = styled.button`
  border: 1px solid lightgray;
  background: #24b8bd;
  color: white;
  margin-top: 20px;
  padding: 10px 10%;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 5px 0px gray;
  }

  &:active {
    box-shadow: inset 0 0 31px 5px cadetblue;
  }
`;
